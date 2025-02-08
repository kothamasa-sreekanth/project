import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Introduction from "./sections/Introduction";
import Fundamentals from "./sections/Fundamentals";
import Strategies from "./sections/Strategies";
import Performance from "./sections/Performance";
import RiskManagement from "./sections/RiskManagement";
import MarketAnalysis from "./sections/MarketAnalysis";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track horizontal scroll progress
  const { scrollXProgress } = useScroll({ container: containerRef });

  // Parallax effect: move background image at a slower speed
  const backgroundX = useTransform(scrollXProgress, [0, 1], ["0%", "-50%"]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <ScrollProgress />
      <Navigation onSectionClick={scrollToSection} />

      {/* ✅ Custom Horizontal Parallax Background */}
      <motion.div
        className="absolute inset-0 w-[200%] h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')`,
          x: backgroundX, // Moves based on scroll progress
        }}
      />

      <motion.div
        ref={containerRef}
        className="h-screen flex overflow-x-auto snap-x snap-mandatory hide-scrollbar relative z-10"
      >
        <section
          id="introduction"
          className="snap-center min-w-screen w-screen h-screen flex-shrink-0 bg-black/50 text-white flex items-center justify-center"
        >
          <Introduction />
        </section>

        <section
          id="fundamentals"
          className="snap-center min-w-screen w-screen h-screen flex-shrink-0 bg-black/50 text-white flex items-center justify-center"
        >
          <Fundamentals />
        </section>

        <section
          id="strategies"
          className="snap-center min-w-screen w-screen h-screen flex-shrink-0 bg-black/50 text-white flex items-center justify-center"
        >
          <Strategies />
        </section>

        <section
          id="performance"
          className="snap-center min-w-screen w-screen h-screen flex-shrink-0 bg-black/50 text-white flex items-center justify-center"
        >
          <Performance />
        </section>

        <section
          id="risk-management"
          className="snap-center min-w-screen w-screen h-screen flex-shrink-0 bg-black/50 text-white flex items-center justify-center"
        >
          <RiskManagement />
        </section>

        <section
          id="market-analysis"
          className="snap-center min-w-screen w-screen h-screen flex-shrink-0 bg-black/50 text-white flex items-center justify-center"
        >
          <MarketAnalysis />
        </section>
      </motion.div>
    </div>
  );
}

export default App;
