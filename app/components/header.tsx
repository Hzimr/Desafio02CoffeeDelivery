import { FaShoppingCart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-center px-40">
      <nav className="flex w-full max-w-[1440px] justify-between py-8">
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
        <section className="flex flex-row gap-3">
          <div className="flex w-36 items-center justify-center gap-1 rounded-md bg-purpleLight px-2 py-[10px] text-purpleDark">
            <IoLocationSharp className="size-5" />
            Sobral, CE
          </div>
          <Link
            href="/Checkout"
            className="w-10 rounded-lg bg-yellowLight p-2 text-yellowDark"
          >
            <FaShoppingCart className="size-5" />
          </Link>
        </section>
      </nav>
    </header>
  );
}
