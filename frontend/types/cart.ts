type AddOns = {
  name: string;
  quantity: number;
};
type Cart = {
  id: number;
  name: string;
  category: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
  addOns: AddOns[];
};

export default Cart;
