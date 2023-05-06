import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = (item) => {
        const { id, name, price } = item;
        const isItemPresent = cartItems.findIndex((item) => item.id === id);
        if (isItemPresent === -1)
        {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        else
        {
            setCartItems(cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
        }
    }
    const removeItemFromCart = (item) => {
        const { id, name, price } = item;
        if (item.quantity > 1)
        {
            setCartItems(cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
        }
        else
        {
            setCartItems(cartItems => cartItems.filter((cartItem) => cartItem !== item));
        }
    }
    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    )
}