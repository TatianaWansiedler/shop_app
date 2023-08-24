import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        productsCart: [],
        quantity: 0,
        isOpen: false,
        sum: 0
    },
    reducers: {
        addToCart: (state, { payload }) => {
            state.isOpen = true
            state.sum += payload.price * payload.quantity
            const productsIndex = state.productsCart.findIndex(({ _id }) => _id === payload._id)

            if (productsIndex === -1) {
                state.productsCart.push(payload)
                state.quantity++
            } else {
                state.productsCart[productsIndex].quantity += payload.quantity
            }
        },
        closeModal: (state) => {
            state.isOpen = false
        },
        deleteFromCart: (state, { payload }) => {
            const currentIndex = state.productsCart.findIndex(({ _id }) => _id === payload)
            state.sum -= (
                state.productsCart[currentIndex].price
                * state.productsCart[currentIndex].quantity
            )
            state.productsCart.splice(currentIndex, 1)
            state.quantity--
        }
    }
})

export const { addToCart, closeModal, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer