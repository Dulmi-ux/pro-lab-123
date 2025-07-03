import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export default function DesktopsPage() {
  const desktops = getProductsByCategory("Desktop");

  return (
    <div>
      <h1 className="text-4xl font-bold font-headline mb-8 text-center">Desktops</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Powerful and customizable desktops built for gaming, creative work, and professional use.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {desktops.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
