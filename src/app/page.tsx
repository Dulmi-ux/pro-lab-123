import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowRight, Laptop, Server, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="text-center bg-card p-8 rounded-lg shadow-md">
        <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
          Welcome to Tech Solutions Hub
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Your ultimate destination for high-performance hardware and expert technical support.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/desktops">Explore Products</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/support">Get Support</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center font-headline mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="link" className="text-lg text-accent-foreground">
            <Link href="/accessories">
              See All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-card p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center font-headline mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                <Laptop className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="font-headline mt-4">Premium Hardware</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Top-tier laptops, desktops, and accessories for all your needs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                <Cpu className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="font-headline mt-4">Expert Customization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Build your dream machine with our powerful customization options.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                <Server className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="font-headline mt-4">24/7 Tech Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access our team of IT professionals whenever you need assistance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
