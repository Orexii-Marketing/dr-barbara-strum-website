import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, Heart, ShoppingBag } from "lucide-react";

export function Header() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/reviews" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <div className="font-serif text-2xl font-bold text-luxury-charcoal hover:text-luxury-gold transition-colors cursor-pointer">
                Dr. Barbara Sturm
              </div>
            </Link>
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`text-gray-600 hover:text-luxury-gold transition-colors cursor-pointer ${
                      location === item.href ? "text-luxury-gold font-medium" : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 border-gray-200 rounded-full focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </form>
            </div>

            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5 text-gray-600" />
            </Button>

            {/* Favorites */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Heart className="w-5 h-5 text-gray-600" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5 text-gray-600" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="text-lg font-medium text-gray-900 hover:text-luxury-gold transition-colors">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 border-gray-200 rounded-full focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                autoFocus
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </form>
          </div>
        )}
      </div>
    </nav>
  );
}
