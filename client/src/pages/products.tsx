import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";
import { SEOHead } from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { drStumProducts } from "@/data/products";

export default function Products() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1] || '');
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState('all');

  const products = drStumProducts;
  const isLoading = false;

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'serums', label: 'Serums' },
    { value: 'creams', label: 'Creams' },
    { value: 'cleansers', label: 'Cleansers' },
    { value: 'eye care', label: 'Eye Care' },
    { value: 'gift sets', label: 'Gift Sets' },
    { value: 'body care', label: 'Body Care' },
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popularity', label: 'Most Popular' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-100', label: 'Under $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200-300', label: '$200 - $300' },
    { value: '300+', label: '$300+' },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p) * 100);
      filtered = filtered.filter(product => {
        const price = product.price;
        return max ? price >= min && price <= max : price >= min;
      });
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.reviewCount - a.reviewCount;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return sorted;
  }, [products, searchQuery, selectedCategory, sortBy, priceRange]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('name');
    setPriceRange('all');
  };

  const activeFiltersCount = [
    searchQuery.trim() !== '',
    selectedCategory !== 'all',
    priceRange !== 'all'
  ].filter(Boolean).length;

  return (
    <>
      <SEOHead
        title="Dr. Barbara Sturm Products | Premium Skincare Collection"
        description="Browse the complete Dr. Barbara Sturm skincare collection. Discover anti-aging serums, moisturizers, cleansers, and more premium products."
        keywords="Dr. Barbara Sturm products, luxury skincare collection, anti-aging serums, face creams, cleansers"
        canonical="https://yourdomain.com/products"
      />
      
      <Header />
      
      <main className="min-h-screen bg-luxury-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-charcoal mb-6">
              Complete Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Dr. Barbara Sturm's entire range of premium skincare solutions.
            </p>
          </div>

          {/* Filters Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Price Range Filter */}
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-gray-600">Active filters:</span>
                  {searchQuery.trim() && (
                    <Badge variant="secondary">Search: "{searchQuery}"</Badge>
                  )}
                  {selectedCategory !== 'all' && (
                    <Badge variant="secondary">
                      Category: {categories.find(c => c.value === selectedCategory)?.label}
                    </Badge>
                  )}
                  {priceRange !== 'all' && (
                    <Badge variant="secondary">
                      Price: {priceRanges.find(p => p.value === priceRange)?.label}
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>

          {/* Results Summary */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredAndSortedProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          ) : (
            <ProductGrid
              products={filteredAndSortedProducts}
              variant="compact"
              columns={4}
            />
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
}
