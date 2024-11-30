import { Baloo_2 } from "next/font/google";
import { MdOutlineAttachMoney } from "react-icons/md";

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
                <MdOutlineAttachMoney />
                <div>
                  <h3 className="text-base">Pagamento</h3>
                  <p className="text-sm font-normal">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </section>
              <div className="flex flex-row gap-3 pt-1">
                <input
                  className="w-36 appearance-none rounded-md bg-baseButton text-xs after:box-border after:block after:w-36 after:py-4 after:text-center after:content-[attr(value)] checked:after:rounded-md checked:after:border checked:after:border-purple checked:after:bg-purpleLight hover:cursor-pointer"
                  type="radio"
                  name="pgto"
                  value="Dinheiro"
                />
                <input
                  className="w-36 appearance-none rounded-md bg-baseButton text-xs after:box-border after:block after:w-36 after:py-4 after:text-center after:content-[attr(value)] checked:after:rounded-md checked:after:border checked:after:border-purple checked:after:bg-purpleLight hover:cursor-pointer"
                  type="radio"
                  name="pgto"
                  value="Cartão de Crédito"
                />
                <input
                  className="w-36 appearance-none rounded-md bg-baseButton text-xs after:box-border after:block after:w-36 after:py-4 after:text-center after:content-[attr(value)] checked:after:rounded-md checked:after:border checked:after:border-purple checked:after:bg-purpleLight hover:cursor-pointer"
                  type="radio"
                  name="pgto"
                  value="Cartão de Débito"
                />
                <input
                  className="w-36 appearance-none rounded-md bg-baseButton text-xs after:box-border after:block after:w-36 after:py-4 after:text-center after:content-[attr(value)] checked:after:rounded-md checked:after:border checked:after:border-purple checked:after:bg-purpleLight hover:cursor-pointer"
                  type="radio"
                  name="pgto"
                  value="PIX"
                />
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
