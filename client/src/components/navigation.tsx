import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import jotahLogo from "@assets/jotah-logo.jpeg";
export default function Navigation() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [location] = useLocation();
const navLinks = [
{ href: "/", label: "Home" },
{ href: "/products", label: "Products" },
{ href: "/testimonials", label: "Reviews" },
{ href: "/what-the-fun", label: "What the Fun" },
{ href: "/#contact", label: "Contact" }
];
return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-goldenrod/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
{/* Logo */}

<Link href="/" className="flex items-center space-x-3 group">

<img

src={jotahLogo}

alt="Jotah Logo"

className="h-12 w-12 rounded-full object-cover border-2 border-goldenrod/50 group-hover:border-goldenrod transition-colors"

/>

<span className="text-2xl font-playfair font-bold bg-gradient-to-r from-goldenrod to-yellow-400 bg-clip-text text-transparent">

JOTAH

</span>

</Link>



{/* Desktop Navigation */}

<div className="hidden md:flex items-center space-x-8">

{navLinks.map((link) => (

<Link

key={link.href}

href={link.href}

className={`text-white hover:text-goldenrod transition-colors font-medium ${

location === link.href ? 'text-goldenrod' : ''

}`}

>

{link.label}

</Link>

))}

<Button

className="bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105"

data-testid="button-order-now"

>

Order Now

</Button>

</div>



{/* Mobile Menu Button */}

<button

onClick={() => setIsMenuOpen(!isMenuOpen)}

className="md:hidden text-white hover:text-goldenrod transition-colors"

data-testid="button-mobile-menu"

>

{isMenuOpen ? <X size={24} /> : <Menu size={24} />}

</button>

</div>



{/* Mobile Navigation */}

{isMenuOpen && (

<div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-goldenrod/20">

<div className="px-4 py-6 space-y-4">

{navLinks.map((link) => (

<Link

key={link.href}

href={link.href}

className={`block text-white hover:text-goldenrod transition-colors font-medium ${

location === link.href ? 'text-goldenrod' : ''

}`}

onClick={() => setIsMenuOpen(false)}

>

{link.label}

</Link>

))}

<Button

className="w-full bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black py-3 rounded-full font-bold transition-all mt-4"

data-testid="button-mobile-order-now"

>

Order Now

</Button>

</div>

</div>

)}

</div>

</nav>

);

}

