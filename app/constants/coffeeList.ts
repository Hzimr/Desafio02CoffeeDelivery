import Arabe from "../assets/tiposDeCafe/arabe.svg";
import Irlandes from "../assets/tiposDeCafe/irlandes.svg";
import Havaiano from "../assets/tiposDeCafe/havaiano.svg";
import Cubano from "../assets/tiposDeCafe/cubano.svg";
import ChocolateQuente from "../assets/tiposDeCafe/chocolateQuente.svg";
import Mocaccino from "../assets/tiposDeCafe/mocaccino.svg";
import Macchiato from "../assets/tiposDeCafe/macchiato.svg";
import Capuccino from "../assets/tiposDeCafe/capuccino.svg";
import Latte from "../assets/tiposDeCafe/latte.svg";
import CafeComLeite from "../assets/tiposDeCafe/cafeComLeite.svg";
import ExpressoGelado from "../assets/tiposDeCafe/expressoGelado.svg";
import ExpressoCremoso from "../assets/tiposDeCafe/expressoCremoso.svg";
import ExpressoAmericano from "../assets/tiposDeCafe/expressoAmericano.svg";
import ExpressoTradicional from "../assets/tiposDeCafe/expressoTradicional.svg";

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
    id: 1,
    image: ExpressoTradicional,
    tag: ["TRADIOCIONAL"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9.90",
  },
  {
    id: 2,
    image: ExpressoAmericano,
    tag: ["TRADIOCIONAL"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9.90",
  },
  {
    id: 3,
    image: ExpressoCremoso,
    tag: ["TRADIOCIONAL"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9.90",
  },
  {
    id: 4,
    image: ExpressoGelado,
    tag: ["TRADIOCIONAL", "GELADO"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9.90",
  },
  {
    id: 5,
    image: CafeComLeite,
    tag: ["TRADIOCIONAL", "COM LEITE"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9.90",
  },
  {
    id: 6,
    image: Latte,
    tag: ["TRADIOCIONAL", "COM LEITE"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9.90",
  },
  {
    id: 7,
    image: Capuccino,
    tag: ["TRADIOCIONAL", "COM LEITE"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "9.90",
  },
  {
    id: 8,
    image: Macchiato,
    tag: ["TRADIOCIONAL", "COM LEITE"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9.90",
  },
  {
    id: 9,
    image: Mocaccino,
    tag: ["TRADIOCIONAL", "COM LEITE"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9.90",
  },
  {
    id: 10,
    image: ChocolateQuente,
    tag: ["ESPECIAL", "COM LEITE"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "9.90",
  },
  {
    id: 11,
    image: Cubano,
    tag: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9.90",
  },
  {
    id: 12,
    image: Havaiano,
    tag: ["ESPECIAL"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: "9.90",
  },
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
