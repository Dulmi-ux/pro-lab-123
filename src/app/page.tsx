import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowRight, Laptop, Cpu, LifeBuoy, Target, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-20">
      <section className="text-center bg-card p-12 rounded-lg shadow-md">
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            Welcome to Prolab IT Solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Your trusted partner for cutting-edge IT hardware, accessories, and expert technical support. We power your progress.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/desktops">Explore Products</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/support">Get Support</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Who Are We?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Prolab IT Solutions is a premier provider of high-performance computer hardware and comprehensive IT support. We are dedicated to empowering businesses and individuals by providing the tools and expertise needed to thrive in a digital world.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <Card className="p-6">
                <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      <Eye className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="font-headline mt-4">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        To be the leading and most trusted IT solutions provider, recognized for our innovation, quality products, and unwavering commitment to customer success.
                    </p>
                </CardContent>
            </Card>
            <Card className="p-6">
                <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      <Target className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="font-headline mt-4">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        To deliver reliable, high-performance hardware and responsive, expert support that enables our clients to achieve their goals with confidence and efficiency.
                    </p>
                </CardContent>
            </Card>
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
          <Button asChild variant="link" className="text-lg text-primary">
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
              <CardTitle className="font-headline mt-4">Laptops & Desktops</CardTitle>
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
              <CardTitle className="font-headline mt-4">IT Accessories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A wide range of accessories to complete your setup.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                <LifeBuoy className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="font-headline mt-4">Expert Tech Support</CardTitle>
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
