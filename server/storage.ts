import { 
  products, contacts, newsletters,
  type Product, type InsertProduct,
  type Contact, type InsertContact,
  type Newsletter, type InsertNewsletter
} from "@shared/schema";
import { drStumProducts } from "../client/src/data/products";

export interface IStorage {
  // Product methods
  getAllProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  getFeaturedProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  searchProducts(query: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Newsletter methods
  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private newsletters: Map<number, Newsletter>;
  private contacts: Map<number, Contact>;
  private currentProductId: number;
  private currentNewsletterId: number;
  private currentContactId: number;

  constructor() {
    this.products = new Map();
    this.newsletters = new Map();
    this.contacts = new Map();
    this.currentProductId = 1;
    this.currentNewsletterId = 1;
    this.currentContactId = 1;
    
    // Initialize with real Dr. Barbara Sturm products
    this.initializeProducts();
  }

  private initializeProducts() {
    drStumProducts.forEach((productData) => {
      const product: Product = {
        ...productData,
        id: this.currentProductId++,
        size: productData.size || null,
        originalPrice: productData.originalPrice || null,
        additionalImages: productData.additionalImages || [],
        features: productData.features || [],
        ingredients: productData.ingredients || [],
        isFeature: productData.isFeature || false,
        isBestSeller: productData.isBestSeller || false,
        isOprahFavorite: productData.isOprahFavorite || false,
        rating: productData.rating || 5,
        reviewCount: productData.reviewCount || 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.products.set(product.id, product);
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(
      (product) => product.slug === slug
    );
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.isFeature
    );
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  async searchProducts(query: string): Promise<Product[]> {
    const searchTerm = query.toLowerCase();
    return Array.from(this.products.values()).filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.shortDescription.toLowerCase().includes(searchTerm)
    );
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = {
      ...insertProduct,
      id,
      size: insertProduct.size || null,
      originalPrice: insertProduct.originalPrice || null,
      additionalImages: insertProduct.additionalImages || [],
      features: insertProduct.features || [],
      ingredients: insertProduct.ingredients || [],
      isFeature: insertProduct.isFeature || false,
      isBestSeller: insertProduct.isBestSeller || false,
      isOprahFavorite: insertProduct.isOprahFavorite || false,
      rating: insertProduct.rating || 5,
      reviewCount: insertProduct.reviewCount || 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.products.set(id, product);
    return product;
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const existing = await this.getNewsletterByEmail(insertNewsletter.email);
    if (existing) {
      return existing;
    }
    
    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      subscribed: true,
      createdAt: new Date(),
    };
    this.newsletters.set(id, newsletter);
    
    // Send notification to admin@orexii.com
    this.notifyAdmin('newsletter', newsletter);
    
    return newsletter;
  }

  private notifyAdmin(type: 'newsletter' | 'contact', data: any) {
    // Log for admin notification - in production this would send email to admin@orexii.com
    console.log(`
===============================================
ADMIN NOTIFICATION - Send to: admin@orexii.com
===============================================
Type: ${type.toUpperCase()} SUBSCRIPTION
Email: ${data.email}
Time: ${new Date().toISOString()}
${type === 'contact' ? `Name: ${data.name}\nMessage: ${data.message}` : ''}
===============================================
    `);
  }

  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email
    );
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    
    // Send notification to admin@orexii.com
    this.notifyAdmin('contact', contact);
    
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
