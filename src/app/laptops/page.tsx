import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export default function LaptopsPage() {
  const laptops = getProductsByCategory("Laptop");

  return (
    <div>
      <h1 className="text-4xl font-bold font-headline mb-8 text-center">Laptops</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Discover our range of high-performance laptops, crafted for productivity, creativity, and gaming on the go.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {laptops.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
