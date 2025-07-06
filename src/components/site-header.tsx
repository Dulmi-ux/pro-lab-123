"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { User, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/icons";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X, Youtube } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/laptops", label: "Laptops" },
  { href: "/desktops", label: "Desktops" },
  { href: "/accessories", label: "Accessories" },
  { href: "/about", label: "About Us"},
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/");
  };

  const getInitials = (name: string | null | undefined) => {
    if (!name) return "U";
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">
            Prolab IT Solutions
          </span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center gap-6 text-sm">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:flex">
             <a href="https://youtube.com/playlist?list=PLT98CRl2KxKHaKA9-4_I38sLzK134p4GJ&si=VQGZSuLOnSuW6uHO" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-4 w-4"/> 
                Watch Tutorials
             </a>
          </Button>
          <ThemeToggle />
          {loading ? (
             <div className="h-8 w-20 bg-muted rounded-md animate-pulse" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                    <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.displayName || 'User'}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b pb-4">
                   <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                      <Logo className="h-6 w-6 text-primary" />
                      <span className="font-bold font-headline">Prolab IT Solutions</span>
                   </Link>
                   <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X/>
                   </Button>
                </div>
                <nav className="flex flex-col gap-4 text-lg mt-8">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === href ? "text-foreground" : "text-foreground/60"
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto border-t pt-4 flex flex-col gap-2">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="https://youtube.com/playlist?list=PLT98CRl2KxKHaKA9-4_I38sLzK134p4GJ&si=VQGZSuLOnSuW6uHO" target="_blank" rel="noopener noreferrer">
                        <Youtube className="mr-2 h-4 w-4"/> 
                        Watch Tutorials
                    </a>
                  </Button>
                   {user ? null : (
                    <>
                      <Button asChild variant="outline" onClick={() => setMobileMenuOpen(false)}><Link href="/login">Login</Link></Button>
                      <Button asChild onClick={() => setMobileMenuOpen(false)}><Link href="/signup">Sign Up</Link></Button>
                    </>
                   )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
