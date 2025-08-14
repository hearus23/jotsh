import express, { type Request, Response, NextFunction } from "express";
import http from "http"; // Import the http module
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // Create the HTTP server explicitly here
  const server = http.createServer(app);

  // Register routes on the express app.
  // Assuming registerRoutes modifies 'app' and does NOT return a new server instance.
  // If registerRoutes *does* return an http.Server instance, you might need to
  // consolidate server creation to *within* registerRoutes or adjust its return type.
  await registerRoutes(app); // Call registerRoutes to apply routes to the 'app'

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Importantly, only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    // Pass the explicitly created server instance to setupVite
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // This serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '3000', 10);
  const host = '127.0.0.1'; // Explicitly use IPv4 loopback

  server.listen({
    port,
    host,
    // Removed reusePort: true - this can sometimes cause issues.
    // Re-add only if you understand its implications and truly need it.
  }, () => {
    log(`serving on port ${port} at http://${host}:${port}`);
  });
})();
