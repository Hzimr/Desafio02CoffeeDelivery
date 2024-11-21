import { FaShoppingCart } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <header className="flex justify-center">
        <nav className="bg-purple flex w-full max-w-[1440px] justify-between px-40 py-8">
          <div>Hello</div>
          <section className="flex flex-row gap-3">
            <p>local</p>
            <button className="text-yellowDark bg-yellowLight h-10 w-10 rounded-lg p-2">
              <FaShoppingCart size={22} />
            </button>
          </section>
        </nav>
      </header>
      <p>Main</p>
    </>
  );
}
