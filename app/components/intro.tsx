import { PiCoffeeFill, PiPackageFill, PiTimerFill } from "react-icons/pi";
import { Baloo_2, Roboto } from "next/font/google";
import CoffeeImg from "../assets/coffeeImg.svg";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

const baloo2 = Baloo_2({
  subsets: ["latin-ext"],
});

const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: ["400"],
});
export function Intro() {
  return (
    <main className="flex justify-center bg-introBackground px-40 py-24 text-black">
      <div className="grid w-full max-w-[1440px] grid-cols-[1fr,1fr] gap-14 py-8">
        <div className="flex flex-col gap-4">
          <h1
            className={`${baloo2.className} font-sans text-5xl font-extrabold`}
          >
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className={`${roboto.className} font-sans text-xl font-extrabold`}>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>
          <div className="mt-12 grid grid-cols-2 grid-rows-2 gap-5">
            <section
              className={`${roboto.className} flex items-center gap-3 font-sans text-base font-extrabold`}
            >
              <div className="flex items-center justify-center rounded-full bg-yellowDark p-[10px] text-backgroundColor">
                <FaShoppingCart className="size-4" />
              </div>
              Compra simples e segura
            </section>
            <section
              className={`${roboto.className} flex items-center gap-3 font-sans text-base font-extrabold`}
            >
              <div className="flex items-center justify-center rounded-full bg-baseText p-[10px] text-backgroundColor">
                <PiPackageFill className="size-4" />
              </div>
              Embalagem mantém o café intacto
            </section>
            <section
              className={`${roboto.className} flex items-center gap-3 font-sans text-base font-extrabold`}
            >
              <div className="flex items-center justify-center rounded-full bg-yellow p-[10px] text-backgroundColor">
                <PiTimerFill className="size-4" />
              </div>
              Entrega rápida e rastreada
            </section>
            <section
              className={`${roboto.className} flex items-center gap-3 font-sans text-base font-extrabold`}
            >
              <div className="flex items-center justify-center rounded-full bg-purple p-[10px] text-backgroundColor">
                <PiCoffeeFill className="size-4" />
              </div>
              O café chega fresquinho até você
            </section>
          </div>
        </div>
        <div className="flex justify-end">
          <Image src={CoffeeImg} alt="Logo" />
        </div>
      </div>
    </main>
  );
}
