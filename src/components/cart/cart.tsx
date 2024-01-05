import ProductItem from "@/components/ProductItem/ProductItem";
import { useCartStore } from "@/lib/zustand/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// A component to display the cart items and interact with the store
export default function CartPage() {
  // Get the cart state and actions from the store
  const { items, total, addItem, removeItem, clearCart } = useCartStore();
  const router = useRouter();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Your Cart</h1>

      <button
        className="bg-amber-700 p-2 rounded-lg hover:scale-[1.03] active:scale-[.97] active:duration-75 transition-all ease-in-out"
        onClick={() => {
          router.push("/");
        }}
      >
        HOME
      </button>

      {items.length > 0 ? (
        <div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="bg-[#242424] shadow rounded flex flex-col"
              >
                <Image
                  className="h-64 w-auto flex flex-wrap"
                  src={item.thumbnail}
                  alt={item.title}
                  height={700}
                  width={700}
                ></Image>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">${item.price}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <span className="text-gray-200">{item.quantity}</span>
                      <button
                        onClick={() => addItem(item)}
                        className="bg-green-500 text- px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between mt-8">
            <span className="text-2xl font-bold">Total: ${total}</span>
            <button
              onClick={() => clearCart()}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link href="/">
            <p className="text-blue-500 hover:underline">Go back to shop</p>
          </Link>
        </div>
      )}
    </div>
  );
}
