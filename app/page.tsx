"use client";
import { Baloo_2 } from "next/font/google";
import { HeaderHome } from "./components/headerHome";
import { Intro } from "./components/intro";
import Image from "next/image";
import { useRef } from "react";
import CafeComLeite from "../app/assets/tiposDeCafe/cafeComLeite.svg";

const baloo2 = Baloo_2({
  subsets: ["latin-ext"],
});
export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const addValue = () => {
    if (inputRef.current) {
      inputRef.current.value = String(Number(inputRef.current.value) + 1);
    }
  };

  const subtractValue = () => {
    if (inputRef.current) {
      inputRef.current.value = String(
        Math.max(0, Number(inputRef.current.value) - 1),
      );
    }
  };

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
            <div className="flex h-80 w-64 flex-col items-center rounded-bl-[32px] rounded-br-md rounded-tl-md rounded-tr-[32px] bg-baseCard px-5 pb-5">
              <div>
                <Image
                  src={CafeComLeite}
                  alt=""
                  width={120}
                  height={120}
                  className="relative -top-10 rounded-full"
                />
              </div>
              <h3
                className={`${baloo2.className} font-sans text-xl font-bold text-black`}
              >
                Expresso Tradicional
              </h3>
              <p className="text-center">
                O tradiocional café feito com água quente e grãos moídos
              </p>
              <section>
                R$ 9,90{" "}
                <div className="flex h-9 w-[72px] items-center justify-center gap-1 bg-baseButton">
                  <button onClick={subtractValue}>
                    <span>-</span>
                  </button>
                  <input
                    ref={inputRef}
                    type="number"
                    name=""
                    id=""
                    min="0"
                    max="100"
                    className="no-arrows w-10 appearance-none justify-center bg-transparent text-center"
                    placeholder="1"
                    defaultValue="1"
                  />
                  <button onClick={addValue}>
                    <span>+</span>
                  </button>
                </div>{" "}
                <button className="bg-purple p-2">Cart</button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
