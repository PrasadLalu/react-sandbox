import type { Product } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
    products: Product[],
}

const initialState: ProductState = {
    products: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    }
});

export const { addToCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
