"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { submitContactForm, type ContactFormState } from "@/actions/contact";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = {
    success: false,
    message: "",
  };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
      } else if (state.errors) {
        // Don't show a toast for validation errors, they are displayed inline
      }
      else {
         toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Contact Us</CardTitle>
          <CardDescription>
            Have a question or feedback? Fill out the form below and we&apos;ll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required />
              {state.errors?.name && (
                <p className="text-sm text-destructive">{state.errors.name[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" required />
              {state.errors?.email && (
                <p className="text-sm text-destructive">{state.errors.email[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" placeholder="What is this about?" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message..." required className="min-h-[150px]" />
              {state.errors?.message && (
                <p className="text-sm text-destructive">{state.errors.message[0]}</p>
              )}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      <div>
        <h3 className="text-2xl font-headline font-bold mb-4">Our Location</h3>
        <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.219525208948!2d-73.98824488459392!3d40.75797497932693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c645107d%3A0x2fe577651a8d0859!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1684497893111!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="mt-6 space-y-2 text-muted-foreground">
           <p><strong>Prolab IT Solutions HQ</strong></p>
           <p>123 Tech Street, Silicon Valley, CA 94000</p>
           <p>Email: contact@prolab.com</p>
           <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
}
