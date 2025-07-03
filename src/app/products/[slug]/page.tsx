import { getProductById, products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ShoppingCart } from "lucide-react";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
           <div className="aspect-video overflow-hidden rounded-lg border">
                <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={600}
                data-ai-hint={product.data_ai_hint}
                className="object-cover w-full h-full"
                />
            </div>
            {/* Can add a thumbnail gallery here */}
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <Badge variant="outline">{product.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold font-headline">{product.name}</h1>
            <p className="text-muted-foreground text-lg">{product.description}</p>
          </div>
          
          <div className="flex items-baseline space-x-4">
             <span className="text-4xl font-bold">${product.price.toFixed(2)}</span>
          </div>

          <Button size="lg" className="w-full md:w-auto">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="font-semibold">{key}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
