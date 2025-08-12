import { addToCart } from "@/features/cart/cartSlice";
import { useAppDispatch } from "@/features/hooks";
import { fetchProducts } from "@/productService";
import type { Product } from "@/types/product";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setLoading(false);
        console.error("Failed to load products", error);
      }
    };
    loadProducts();
  }, []);

  if (loading) <Loading />

  const onAdd = (product: Product) => {
    dispatch(addToCart(product));
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAction={onAdd}
          isInCart={false}
          actionLabel="Add to Cart"
        />
      ))}
    </div>
  );
};

export default ProductList;
