import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/types/product";
import React from 'react';

interface Props {
    product: Product;
    isInCart: boolean;
    actionLabel: string;
    onAction: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAction, actionLabel, isInCart }) => {
    const buttonClass = `
        px-3 py-1 rounded text-white
        ${isInCart
            ? "bg-red-500 hover:bg-red-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`;
    
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="line-clamp-2">{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-gray-600 line-clamp-3 flex justify-center font-bold">
                    INR: {product.price}
                </p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <button
                    onClick={() => onAction(product)}
                    className={buttonClass} >
                    {actionLabel}
                </button>
            </CardFooter>
        </Card>
    )
}

export default ProductCard;
