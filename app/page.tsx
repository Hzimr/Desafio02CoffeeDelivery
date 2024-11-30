import { Baloo_2 } from "next/font/google";
import { Intro } from "./components/intro";
import { CoffeeCard } from "./components/coffeeCard";
import { coffeeListData } from "./constants/coffeeList";

const baloo2 = Baloo_2({
  subsets: ["latin-ext"],
});

export default function Home() {
  return (
    <>
      <Intro />
      <div className="flex justify-center px-40 py-8">
        <div className="flex w-full max-w-[1440px] flex-col gap-14">
          <h2
            className={`${baloo2.className} font-sans text-3xl font-extrabold text-black`}
          >
            Nossos cafés
          </h2>
          <div className="flex flex-wrap gap-8 text-black">
            {coffeeListData?.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                image={coffee.image}
                tag={coffee.tag}
                name={coffee.name}
                description={coffee.description}
                price={coffee.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
