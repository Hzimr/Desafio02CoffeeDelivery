import { Baloo_2 } from "next/font/google";
import { HeaderHome } from "./components/headerHome";
import { Intro } from "./components/intro";
import { CoffeeCard } from "./components/coffeeCard";

const baloo2 = Baloo_2({
  subsets: ["latin-ext"],
});

export default function Home() {
  return (
    <>
      <HeaderHome />
      <Intro />
      <div className="flex justify-center px-40 py-8">
        <div className="flex w-full max-w-[1440px] flex-col gap-14">
          <h2
            className={`${baloo2.className} font-sans text-3xl font-extrabold text-black`}
          >
            Nossos cafés
          </h2>
          <div className="flex flex-wrap gap-8 text-black">
            <CoffeeCard />
          </div>
        </div>
      </div>
    </>
  );
}
