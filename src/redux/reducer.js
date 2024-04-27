// reducer.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    carts: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            // Check if newItem with the same id already exists in carts array
            const existingItem = state.carts.find(cart => cart.userid === newItem.userid);
            if (!existingItem) {
                // If not, add the newItem to the carts array
                state.carts.push(action.payload);
            }
        },
        reduceItem: (state, action) => {
            state.carts = state.carts.filter((cart) => cart.userid !== action.payload)
        }
    }
})

export const { addItem, reduceItem } = cartSlice.actions;
export default cartSlice.reducer;
