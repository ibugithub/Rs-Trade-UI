import { Categories } from "@/components/Categories/categories";
import { Hero } from "@/components/Hero/hero";
import { TopCategory } from "@/components/Categories/topCategory";
import { TopBanner } from "@/components/banners/topBanner";
import { MidBanner1 } from "@/components/banners/midBanner1";
import { MidCategory2 } from "@/components/Categories/midCategory2";
import { MidBanner2 } from "@/components/banners/midBanner2";

export default function Page() {
  return (
    <div className="mt-[7.5rem] bg-gray-100">
      <Hero />
      <Categories />
      <TopBanner />
      <TopCategory />
      <MidBanner1 />
      <MidCategory2 />
      <MidBanner2 />
    </div>

  );
}
