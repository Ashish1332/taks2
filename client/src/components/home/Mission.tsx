
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Mission() {
  return (
    <section id="mission" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] opacity-20" style={{ backgroundSize: "30px 30px" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center">
        <span className="text-muted-foreground text-sm font-medium border border-white/10 px-4 py-1 rounded-full">Our Mission</span>

        <div className="mt-4 space-y-4">
          <h2 className="text-4xl leading-[1.2] md:text-5xl md:leading-[1.2] lg:text-[3.5rem] lg:leading-[1.2] font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            We Drive <span className="text-primary">Businesses</span>
            <br />
            To The <span className="text-primary">Forefront</span> Of The Industries
            <br />
            Through Comprehensive
            <br />
            AI <span className="text-primary">Automation</span>.
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            First impressions matter. That's why our mission is to create clean, enduring designs that elevate. First impressions matter. That's why our mission.
          </p>

          <div className="flex flex-col items-center">
            <Button 
              size="lg" 
              variant="ghost"
              className="text-primary hover:text-primary hover:bg-transparent p-0 group text-xl"
            >
              Book A Call
              <ArrowUpRight className="h-6 w-6 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <svg width="24" height="80" viewBox="0 0 24 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-24">
              <path d="M13.0607 79.0607C12.4749 79.6464 11.5251 79.6464 10.9393 79.0607L1.3934 69.5147C0.807611 68.9289 0.807611 67.9792 1.3934 67.3934C1.97919 66.8076 2.92893 66.8076 3.51472 67.3934L12 75.8787L20.4853 67.3934C21.0711 66.8076 22.0208 66.8076 22.6066 67.3934C23.1924 67.9792 23.1924 68.9289 22.6066 69.5147L13.0607 79.0607ZM13.5 0L13.5 78L10.5 78L10.5 0L13.5 0Z" fill="#FF6B00"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
