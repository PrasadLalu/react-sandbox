import { removeProduct } from "@/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

const Cart = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.cart.products);

  const onRemove = (product: Product) => {
    dispatch(removeProduct(product.id))
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAction={onRemove}
          isInCart={true}
          actionLabel="Remove"
        />
      ))}
    </div>
  );
}

export default Cart;
