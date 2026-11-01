// app/page.tsx
import HeroAtelier from "@/components/HeroAtelier";
import BespokeMeasurement from "@/components/BespokeMeasurement";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroAtelier />
      
      <!-- Optional: Insert Fabric Showcase / 3D Configurator UI Here -->
      
      <BespokeMeasurement />
      
      <footer className="py-12 px-6 border-t border-tda-ivory/10 text-center">
        <p className="font-sans text-xs text-tda-ivory/40 tracking-widest">
          © {new Date().getFullYear()} TDA COUTURE. ALL RIGHTS RESERVED.
        </p>
        <p className="font-sans text-[10px] text-tda-ivory/20 mt-2">
          Lagos · Abuja
        </p>
      </footer>
    </main>
  );
}