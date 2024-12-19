"use client";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { useLocalStorage } from "../_hooks/useLocalStorage";

export function CartControl() {
  const router = useRouter();
  const { value } = useLocalStorage("cart-items", []);

  const handleNavigateToCart = () => {
    router.push("/Checkout");
  };

  return (
    <button
      onClick={handleNavigateToCart}
      className="relative w-10 cursor-pointer rounded-lg border-none bg-yellowLight p-2 text-yellowDark"
    >
      <FaShoppingCart className="size-5" />
      {value.length > 0 && (
        <span className="absolute -top-2 ml-[10px] h-[16px] w-[16px] rounded-full bg-yellowDark px-1 py-0 text-xs text-white">
          {value.length}
        </span>
      )}
    </button>
  );
}
