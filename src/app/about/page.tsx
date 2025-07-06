import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Goal } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          About Prolab IT Solutions
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your trusted partner in navigating the complexities of the digital world. We provide the technology and support that powers progress.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold font-headline">Our History</h2>
          <p className="text-muted-foreground">
            Founded in 2010, Prolab IT Solutions started with a simple mission: to make high-quality technology accessible to everyone. From a small workshop to a leading online retailer, our journey has been driven by a passion for innovation and a commitment to our customers. We've grown alongside the tech industry, always staying at the forefront of the latest advancements to offer you the best.
          </p>
          <p className="text-muted-foreground">
            Over the years, we have built a reputation for reliability, expertise, and exceptional customer service. We believe that the right technology can unlock incredible potential, and we're here to help you find it.
          </p>
        </div>
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Prolab IT Solutions office history"
            width={600}
            height={400}
            data-ai-hint="modern office team"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="bg-card p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center font-headline mb-8">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
              <Briefcase className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-headline font-semibold">Service Commitment</h3>
            <p className="text-muted-foreground mt-2">
              We are committed to providing not just products, but solutions. Our support team is always ready to assist you with any technical challenge, ensuring you get the most out of your hardware.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-headline font-semibold">Our Team</h3>
            <p className="text-muted-foreground mt-2">
              Our team is composed of passionate tech enthusiasts, experienced technicians, and dedicated customer service professionals. We love what we do, and we're here to share our knowledge with you.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
              <Goal className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-headline font-semibold">Our Goals</h3>
            <p className="text-muted-foreground mt-2">
              Our goal is to be your one-stop shop for all things IT. We aim to continuously expand our product offerings, enhance our support services, and build a community of satisfied customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
