type Category = "Coffee" | "NonCoffee";
type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;
  size: string;
};

export default Product;
