// CHANGE IS HERE: Use "../" instead of "@/"
import Navbar from "../components/Navbar";
import HeroAtelier from "../components/HeroAtelier";
import BespokeMeasurement from "../components/BespokeMeasurement";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroAtelier />
      <BespokeMeasurement />
      
      <footer className="py-12 px-6 border-t border-white/10 text-center">
        <p className="font-sans text-xs text-white/40 tracking-widest">
          © {new Date().getFullYear()} TDA COUTURE. ALL RIGHTS RESERVED.
        </p>
        <p className="font-sans text-[10px] text-white/20 mt-2">
          Lagos · Abuja
        </p>
      </footer>
    </main>
  );
}