
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const pages = [
  { name: "Why Us", href: "/why-us" },
  { name: "Mission", href: "/mission" },
  { name: "Works", href: "/works" },
  { name: "Services", href: "/services" },
  {
    name: "Pages",
    items: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="w-full sm:w-auto px-4 sm:px-8 py-3 bg-black/50 backdrop-blur-md sm:rounded-full border border-white/10">
        <div className="flex items-center justify-between sm:justify-start sm:gap-16">
          <Link href="/" className="text-lg text-primary font-medium">
            Automatix
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="sm:hidden p-2 text-white hover:bg-white/10 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div 
            className={`
              absolute sm:relative top-full left-0 right-0 sm:top-auto 
              flex-col sm:flex-row items-center bg-black sm:bg-transparent 
              py-4 sm:py-0 mt-2 sm:mt-0 border-t sm:border-t-0 border-white/10
              transform transition-all duration-300 ease-in-out
              ${isMobileMenuOpen ? 'flex translate-y-0 opacity-100' : 'flex translate-y-[-10px] opacity-0 pointer-events-none sm:translate-y-0 sm:opacity-100 sm:pointer-events-auto'}
            `}
          >
            <NavigationMenu>
              <NavigationMenuList className="flex-col sm:flex-row gap-4">
              {pages.map((page) =>
                page.items ? (
                  <NavigationMenuItem key={page.name}>
                    <NavigationMenuTrigger className="text-white/80 hover:text-white data-[state=open]:text-white">
                      {page.name} <ChevronDown className="h-3 w-3 ml-1 opacity-50" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-48 gap-2 p-4 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg">
                        {page.items.map((item) => (
                          <li key={item.name}>
                            <Link 
                              href={item.href} 
                              className="block p-2 hover:bg-white/10 rounded-md text-white/80 hover:text-white"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={page.name}>
                    <Link 
                      href={page.href} 
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {page.name}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
            </NavigationMenu>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-4 sm:mt-0 sm:ml-4 gap-1.5 font-medium text-white border-white/20 hover:bg-white/10 w-[calc(100%-2rem)] sm:w-auto"
            >
              Let's Talk <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
