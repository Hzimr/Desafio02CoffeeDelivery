import { Baloo_2 } from "next/font/google";
import { MdOutlineAttachMoney, MdPix } from "react-icons/md";
import { PiBankLight, PiCreditCardLight, PiMoney } from "react-icons/pi";

const baloo2 = Baloo_2({
  subsets: ["latin-ext"],
});

export default function CheckoutPage() {
  return (
    <>
      <div className="flex justify-center px-40 py-8">
        <div className="grid w-full max-w-[1440px] grid-cols-[2fr,1fr] gap-8 text-lg font-bold text-baseSubtitle">
          <div className="flex flex-col gap-3">
            <h2 className={`${baloo2.className}`}>Complete seu pedido</h2>
            <div className="h-96 bg-baseCard"></div>
            <div className="flex h-52 flex-col gap-8 bg-baseCard p-10">
              <section className="flex flex-row justify-start">
                <MdOutlineAttachMoney
                  className="font-light text-purple"
                  size={22}
                />
                <div>
                  <h3 className="text-base">Pagamento</h3>
                  <p className="text-sm font-normal">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </section>
              <div className="flex flex-row gap-3 pt-1">
                <label className="flex items-center rounded-md border border-transparent bg-baseButton px-4 hover:cursor-pointer has-[:checked]:border has-[:checked]:border-purple has-[:checked]:bg-purpleLight">
                  <PiMoney className="text-purple" />
                  <input
                    className="appearance-none rounded-md text-xs after:box-border after:block after:w-28 after:py-4 after:pl-3 after:content-[attr(value)]"
                    type="radio"
                    name="pgto"
                    value="Dinheiro"
                  />
                </label>
                <label className="flex items-center rounded-md border border-transparent bg-baseButton px-4 hover:cursor-pointer has-[:checked]:border has-[:checked]:border-purple has-[:checked]:bg-purpleLight">
                  <PiCreditCardLight className="text-purple" />
                  <input
                    className="appearance-none rounded-md text-xs after:box-border after:block after:w-28 after:py-4 after:pl-3 after:content-[attr(value)]"
                    type="radio"
                    name="pgto"
                    value="Cartão de Crédito"
                  />
                </label>
                <label className="flex items-center rounded-md border border-transparent bg-baseButton px-4 hover:cursor-pointer has-[:checked]:border has-[:checked]:border-purple has-[:checked]:bg-purpleLight">
                  <PiBankLight className="text-purple" />
                  <input
                    className="appearance-none rounded-md text-xs after:box-border after:block after:w-28 after:py-4 after:pl-3 after:content-[attr(value)]"
                    type="radio"
                    name="pgto"
                    value="Cartão de Débito"
                  />
                </label>
                <label className="flex items-center rounded-md border border-transparent bg-baseButton px-4 hover:cursor-pointer has-[:checked]:border has-[:checked]:border-purple has-[:checked]:bg-purpleLight">
                  <MdPix className="text-purple" />
                  <input
                    className="appearance-none rounded-md text-xs after:box-border after:block after:w-28 after:py-4 after:pl-3 after:content-[attr(value)]"
                    type="radio"
                    name="pgto"
                    value="PIX"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-1">
            <h2 className={`${baloo2.className}`}>Cafés selecionados</h2>
            <div className="flex w-full min-w-[320px] flex-col items-center gap-3 rounded-bl-[32px] rounded-br-md rounded-tl-md rounded-tr-[32px] bg-baseCard p-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}
