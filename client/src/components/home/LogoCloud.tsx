
import { motion } from "framer-motion";

const logos = [
  { name: "Optimal", image: "../../../attached_assets/image_1739979117306.png" },
  { name: "Zapfast", image: "../../../attached_assets/image_1739979457164.png" },
  { name: "Grapho", image: "../../../attached_assets/image_1739979528992.png" },
  { name: "Signum", image: "../../../attached_assets/image_1739986782765.png" },
  { name: "Vectra", image: "../../../attached_assets/image_1739986924856.png" }
];

export function LogoCloud() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-6xl">
        <p className="text-sm text-center text-gray-500 mb-8">
          Our services are featured on
        </p>
        <div className="flex justify-center items-center flex-wrap gap-12">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.image}
              alt={logo.name}
              className="h-8 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-75 transition-opacity"
              onError={(e) => console.error(`Failed to load image: ${logo.image}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
