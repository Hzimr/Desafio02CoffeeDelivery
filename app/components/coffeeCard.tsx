"use client";
import Image from "next/image";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useRef } from "react";
import { roboto, baloo2 } from "../fonts/fonts";
interface CoffeeCardProps {
  image: HTMLImageElement;
  tag: string[];
  name: string;
  description: string;
  price: string;
  id: number;
}

export function CoffeeCard({
  image,
  tag,
  name,
  description,
  price,
  id,
}: CoffeeCardProps) {
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
    <div
      key={id}
      className="flex h-80 w-64 flex-col items-center gap-3 rounded-bl-[32px] rounded-br-md rounded-tl-md rounded-tr-[32px] bg-baseCard px-5 pb-5"
    >
      <div className="relative -top-10 h-20">
        <Image
          src={image}
          alt=""
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>
      <div className="space-x-1">
        {tag.map((tagItem, index) => (
          <span
            key={index}
            className={`${roboto.className} rounded-3xl bg-yellowLight px-2 py-1 text-xs font-bold text-yellowDark`}
          >
            {tagItem}
          </span>
        ))}
      </div>
      <h3
        className={`${baloo2.className} font-sans text-xl font-bold text-black`}
      >
        {name}
      </h3>
      <p className="text-center text-sm text-baseLabel">{description}</p>
      <section className="mt-6 flex items-center justify-center gap-2">
        <span className="inline">
          <p className={`${roboto.className} inline text-sm font-normal`}>R$</p>{" "}
          <p className="inline text-2xl font-bold">{price}</p>
        </span>
        <div className="flex h-9 w-[72px] items-center justify-center gap-1 bg-baseButton">
          <button onClick={subtractValue}>
            <span className="text-xl text-purple">-</span>
          </button>
          <input
            ref={inputRef}
            type="number"
            name=""
            id=""
            min="0"
            max="100"
            className="no-arrows w-7 appearance-none justify-center bg-transparent text-center"
            placeholder="1"
            defaultValue="1"
          />
          <button onClick={addValue}>
            <span className="text-xl text-purple">+</span>
          </button>
        </div>{" "}
        <button className="rounded-md bg-purpleDark p-2 text-white">
          <PiShoppingCartSimpleFill className="size-5" />
        </button>
      </section>
    </div>
  );
}
