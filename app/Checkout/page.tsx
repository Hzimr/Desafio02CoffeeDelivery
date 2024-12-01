import { MdOutlineAttachMoney, MdPix } from "react-icons/md";
import { PiBankLight, PiCreditCardLight, PiMoney } from "react-icons/pi";
import { roboto, baloo2 } from "../fonts/fonts";
import { CiLocationOn } from "react-icons/ci";

export default function CheckoutPage() {
  return (
    <>
      <div className="flex justify-center px-40 py-8">
        <div className="grid w-full max-w-[1440px] grid-cols-[2fr,1fr] gap-8 text-lg font-bold text-baseSubtitle">
          {/* Complete seu pedido */}
          <div className="flex flex-col gap-3">
            <h2 className={`${baloo2.className}`}>Complete seu pedido</h2>
            <div className="flex h-96 flex-col gap-8 bg-baseCard p-10">
              <div className="flex flex-row items-start justify-start gap-2">
                <CiLocationOn size={26} className="text-yellowDark" />
                <div>
                  <h4 className={`${roboto.className} text-base font-normal`}>
                    Endereço de Entrega
                  </h4>
                  <p className={`${roboto.className} text-sm font-normal`}>
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <section>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="CEP"
                    className="rounded border bg-baseInput p-3 text-sm font-normal text-baseLabel focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                  />
                </section>
                <section>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Rua"
                    className="w-full rounded border bg-baseInput p-3 text-sm font-normal text-baseLabel focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                  />
                </section>
                <section className="flex gap-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Número"
                    className="rounded border bg-baseInput p-3 text-sm font-normal text-baseLabel focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Complemento"
                    className="w-full rounded border bg-baseInput p-3 text-sm font-normal text-baseLabel focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                  />
                </section>
                <section className="flex gap-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Bairro"
                    className="rounded border bg-baseInput p-3 text-sm font-normal text-baseLabel focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Cidade"
                    className="w-full rounded border bg-baseInput p-3 text-sm font-normal text-baseLabel focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="UF"
                    className="rounded border bg-baseInput p-3 text-sm font-normal text-baseLabel focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                  />
                </section>
              </div>
            </div>
            <div className="flex h-52 flex-col gap-8 bg-baseCard p-10">
              <section className="flex flex-row justify-start">
                <MdOutlineAttachMoney
                  className="font-light text-purple"
                  size={22}
                />
                <div>
                  <h3 className={`${roboto.className} text-base font-medium`}>
                    Pagamento
                  </h3>
                  <p className={`${roboto.className} text-sm font-normal`}>
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
          {/* Café Selecionados */}
          <div className="flex flex-col gap-3 pt-1">
            <h2 className={`${baloo2.className}`}>Cafés selecionados</h2>
            <div className="flex w-full min-w-[320px] flex-col items-center gap-3 rounded-bl-[32px] rounded-br-md rounded-tl-md rounded-tr-[32px] bg-baseCard p-10">
              <div>
                <div>Item1</div>
                <div>Item2</div>
              </div>
              <div className="flex w-full flex-col">
                <section className="flex justify-between">
                  <p>Total de itens</p>
                  <p>R$ 29,70</p>
                </section>
                <section className="flex justify-between">
                  <p>Entrega</p>
                  <p>R$ 5,00</p>
                </section>
                <section className="flex justify-between">
                  <p>Total</p>
                  <p>R$ 34,70</p>
                </section>
              </div>
              <button className="w-full rounded-md bg-yellow py-4 text-sm font-bold text-white hover:opacity-80">
                Confirmar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
