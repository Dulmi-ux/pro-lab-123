import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export default function AccessoriesPage() {
  const accessories = getProductsByCategory("Accessory");

  return (
    <div>
      <h1 className="text-4xl font-bold font-headline mb-8 text-center">Accessories</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Enhance your setup with our premium selection of keyboards, mice, monitors, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {accessories.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
