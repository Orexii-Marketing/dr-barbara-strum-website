import { Link } from "wouter";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const productCategories = [
    { name: "Serums", href: "/products?category=serums" },
    { name: "Moisturizers", href: "/products?category=creams" },
    { name: "Cleansers", href: "/products?category=cleansers" },
    { name: "Eye Care", href: "/products?category=eye-care" },
    { name: "Gift Sets", href: "/products?category=gift-sets" },
  ];

  const supportLinks = [
    { name: "Customer Service", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Size Guide", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  const companyLinks = [
    { name: "About Dr. Sturm", href: "/#about" },
    { name: "Science", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="font-serif text-2xl font-bold text-luxury-charcoal mb-4">
              Dr. Barbara Sturm
            </div>
            <p className="text-gray-600 mb-6">
              Premium skincare solutions backed by science and trusted by professionals worldwide. 
              Dr. Barbara Sturm's molecular cosmetics approach delivers transformative results through 
              anti-inflammatory ingredients, hyaluronic acid technology, and botanically-sourced actives. 
              Experience luxury skincare that combines German precision with celebrity-endorsed efficacy.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-luxury-gold transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-luxury-charcoal mb-4">Products</h3>
            <ul className="space-y-3 text-gray-600">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href}>
                    <span className="hover:text-luxury-gold transition-colors cursor-pointer">
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-luxury-charcoal mb-4">Support</h3>
            <ul className="space-y-3 text-gray-600">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-luxury-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-luxury-charcoal mb-4">Company</h3>
            <ul className="space-y-3 text-gray-600">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <a href={link.href} className="hover:text-luxury-gold transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <span className="hover:text-luxury-gold transition-colors cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 sm:mb-0">
            © 2024 Dr. Barbara Sturm Affiliate Store. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-luxury-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-luxury-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-luxury-gold transition-colors">
              Affiliate Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
