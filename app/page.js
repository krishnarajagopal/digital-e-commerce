import Image from "next/image";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";

export default function Home() {
  return (
    <main>
      <div><Hero /></div>

      {/* Latest Products */}
      <ProductSection />
      {/* Project source code */}
      {/* Icon Packs */}
    </main>
  );
}
