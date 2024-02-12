import Image from "next/image";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";
import ProductList from "./_components/ProductList";
import 'setimmediate';
if (!global.setImmediate)
{
  global.setImmediate = setTimeout;
}
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
