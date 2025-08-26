import { createContext } from "react";
import type Cart from "@/types/cart";

type CartContextType = {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});

export default CartContext;
