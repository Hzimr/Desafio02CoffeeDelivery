import Arabe from "../assets/tiposDeCafe/arabe.svg";
import Irlandes from "../assets/tiposDeCafe/irlandes.svg";

type coffeeListType = {
  id: number;
  image: HTMLImageElement;
  tag: string[];
  name: string;
  description: string;
  price: string;
};

export const coffeeListData: coffeeListType[] = [
  {
    id: 13,
    image: Arabe,
    tag: ["ESPECIAL"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: "9.90",
  },
  {
    id: 14,
    image: Irlandes,
    tag: ["ESPECIAL", "ALCOÓLICO"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "9.90",
  },
];
