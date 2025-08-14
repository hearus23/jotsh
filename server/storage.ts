import { type User, type InsertUser, type Contact, type InsertContact, type Dealer, type InsertDealer } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  searchDealers(city?: string, zipCode?: string): Promise<Dealer[]>;
  getAllDealers(): Promise<Dealer[]>;
  createDealer(dealer: InsertDealer): Promise<Dealer>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private dealers: Map<string, Dealer>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.dealers = new Map();
    
    // Initialize with some sample dealers
    this.initializeDealers();
  }

  private initializeDealers() {
    const sampleDealers: Dealer[] = [
      {
        id: randomUUID(),
        name: "Premium Smoke Shop",
        address: "123 Main Street",
        phone: "+91 98765 43210",
        city: "Mumbai",
        state: "Maharashtra",
        zipCode: "400001",
        status: "open",
        latitude: "19.0760",
        longitude: "72.8777"
      },
      {
        id: randomUUID(),
        name: "Traditional Tobacco House",
        address: "456 Heritage Road",
        phone: "+91 87654 32109",
        city: "Delhi",
        state: "Delhi",
        zipCode: "110001",
        status: "open",
        latitude: "28.7041",
        longitude: "77.1025"
      },
      {
        id: randomUUID(),
        name: "Elite Accessories Co.",
        address: "789 Business District",
        phone: "+91 76543 21098",
        city: "Bangalore",
        state: "Karnataka",
        zipCode: "560001",
        status: "closes_soon",
        latitude: "12.9716",
        longitude: "77.5946"
      }
    ];

    sampleDealers.forEach(dealer => {
      this.dealers.set(dealer.id, dealer);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      phone: insertContact.phone || null,
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async searchDealers(city?: string, zipCode?: string): Promise<Dealer[]> {
    const allDealers = Array.from(this.dealers.values());
    
    if (!city && !zipCode) {
      return allDealers;
    }

    return allDealers.filter(dealer => {
      const cityMatch = city ? dealer.city.toLowerCase().includes(city.toLowerCase()) : true;
      const zipMatch = zipCode ? dealer.zipCode.includes(zipCode) : true;
      return cityMatch && zipMatch;
    });
  }

  async getAllDealers(): Promise<Dealer[]> {
    return Array.from(this.dealers.values());
  }

  async createDealer(insertDealer: InsertDealer): Promise<Dealer> {
    const id = randomUUID();
    const dealer: Dealer = { 
      ...insertDealer, 
      id,
      status: insertDealer.status || "open",
      latitude: insertDealer.latitude || null,
      longitude: insertDealer.longitude || null
    };
    this.dealers.set(id, dealer);
    return dealer;
  }
}

export const storage = new MemStorage();
