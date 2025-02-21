import { Brain, ThumbsUp, Users2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-4 relative overflow-hidden">
      {/* Background dot pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] opacity-20"
        style={{ backgroundSize: "30px 30px" }}
      />

      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center">
        <span className="text-muted-foreground text-sm font-medium border border-white/10 px-4 py-1 rounded-full">Why Us</span>

        <h2 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Experience The Benefits<br />
          Of Our Expertise
        </h2>

        <p className="mt-4 text-muted-foreground">
          That drives impactful gain powerful results
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#111111] bg-opacity-80 backdrop-blur-sm border border-white/5">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Innovative Approach</h3>
            <p className="mt-4 text-muted-foreground">
              Look for works that reflect a unique character and differentiate in a crowded marketplace.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#111111] bg-opacity-80 backdrop-blur-sm border border-white/5">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <ThumbsUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Seamless Experience</h3>
            <p className="mt-4 text-muted-foreground">
              A seamless user experience across all devices, ensuring every interaction connects with the user.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#111111] bg-opacity-80 backdrop-blur-sm border border-white/5">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <Users2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Ongoing Partnership</h3>
            <p className="mt-4 text-muted-foreground">
              Find a new partner easily, not just providers, who offer ongoing support even after the project ends.
            </p>
          </div>
        </div>

        <Button 
          size="lg" 
          variant="default"
          className="mt-12 group"
        >
          See Pricing
          <ArrowUpRight className="h-3.5 w-3.5 rotate-[90deg]" />
        </Button>
      </div>
    </section>
  );
}