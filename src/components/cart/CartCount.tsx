// Import the useCartStore hook from the store
"use client";
import { useCartStore } from "@/lib/zustand/store";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

// Define the cart icon component
const CartIcon = () => {
  // Get the number of cart items from the store using the numberCart selector
  const cartCount = useCartStore((state) => state.getCartCount());

  // Display the cart icon and the number of cart items
  return (
    <div className=" bg-gray-900 flex justify-center items-center">
      <Link href={"/cart"}>
        <div className="relative py-2">
          <div className="t-0 absolute left-3">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
              {cartCount}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            
            stroke="currentColor"
            className="file: mt-4 h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default CartIcon;