import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const exisitingCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const exisitingCartItem = state.items[exisitingCartIndex];

    let updatedItem;
    let updatedItems;

    if (exisitingCartItem) {
      updatedItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exisitingCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE") {
    const index = state.items.findIndex((item) => item.id === action.id);
    const price = state.items[index].price;

    let updatedItems;
    let updatedItem;
    let updatedAmount;
    const existingItem = state.items[index];

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      updatedAmount = state.totalAmount - price;
    } else {
      updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
      updatedAmount = state.totalAmount - price;
    }

    return { items: updatedItems, totalAmount: updatedAmount };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemToHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToHandler,
    removeItem: removeItemToHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
