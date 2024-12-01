import Image from "next/image";
import { baloo2 } from "../fonts/fonts";
import Delivery from "../assets/delivery.svg";
import { FaLocationDot } from "react-icons/fa6";
import { PiTimerFill } from "react-icons/pi";
import { MdOutlineAttachMoney } from "react-icons/md";

export default function Success() {
  return (
    <div className="flex justify-center px-40 py-8">
      <div className="flex w-full max-w-[1440px] flex-row justify-between gap-28 py-12">
        <div className="flex w-full flex-col gap-10">
          <div className="flex w-full flex-col gap-1">
            <h1
              className={`${baloo2.className} text-3xl font-extrabold text-yellowDark`}
            >
              Uhu! Pedido confirmado
            </h1>
            <p className="text-baseSubtitle">
              Agora é só aguardar que logo o café chegará até você
            </p>
          </div>
          <div className="flex flex-col gap-8 rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] border border-b-purple border-l-yellow border-r-purple border-t-yellow p-8 text-baseText">
            <div className="flex flex-row gap-3">
              <div className="h-8 w-8 rounded-full bg-purple p-2 text-backgroundColor">
                <FaLocationDot color="#FFF" />
              </div>
              <section>
                <p>
                  Entrega em <strong>Rua Cel. Estanilau Frota, 563</strong>
                </p>
                <p>Centro - Sobral, CE</p>
              </section>
            </div>
            <div className="flex flex-row gap-3">
              <div className="h-8 w-8 rounded-full bg-yellow p-2 text-backgroundColor">
                <PiTimerFill color="#FFF" />
              </div>
              <section>
                <p>Previsão de entrega</p>
                <p>20 min - 30 min</p>
              </section>
            </div>
            <div className="flex flex-row gap-3">
              <div className="h-8 w-8 rounded-full bg-yellowDark p-2 text-backgroundColor">
                <MdOutlineAttachMoney color="#FFF" />
              </div>
              <section>
                <p>Pagamento na entrega</p>
                <p>Cartão de Crédito</p>
              </section>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={Delivery} alt="" width="788" height="284" />
        </div>
      </div>
    </div>
  );
}
