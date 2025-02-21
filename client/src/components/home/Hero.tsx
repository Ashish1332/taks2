import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { fonts } from "@/lib/fonts";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen pt-48 pb-16 px-4 relative overflow-hidden">
      {/* Background dot pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] opacity-20"
        style={{ backgroundSize: "30px 30px" }}
      />

      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center">
        <AvailabilityBadge />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 space-y-8 flex flex-col items-center"
        >
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            style={{ fontFamily: fonts.heading }}
          >
            <span className="text-primary">Automation Agency</span>
            <br />
            Beyond <span className="inline-block">✧</span> Limits.
            <br />
            <span className="text-primary">Amplified With AI.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Design services at your fingertips, Pause or cancel anytime.
          </p>

          <Button 
            size="lg" 
            variant="outline"
            className="mt-8 bg-black/10 border-white/5 hover:bg-black/20 hover:border-white/10 backdrop-blur-sm group"
          >
            Learn More
            <ArrowUpRight className="h-3.5 w-3.5 rotate-[90deg]" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
