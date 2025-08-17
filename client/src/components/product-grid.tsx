import { ProductCard } from "./product-card";
import { type Product } from "@shared/schema";

interface ProductGridProps {
  products: Product[];
  title?: string;
  description?: string;
  variant?: "default" | "compact";
  columns?: 2 | 3 | 4;
}

export function ProductGrid({ 
  products, 
  title, 
  description, 
  variant = "default",
  columns = 3 
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  const gridClass = {
    2: "grid sm:grid-cols-2 gap-6",
    3: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
    4: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
  }[columns];

  return (
    <div>
      {(title || description) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-charcoal mb-6">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div className={gridClass}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}
