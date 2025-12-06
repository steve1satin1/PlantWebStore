import "./cart.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, incrementItem, decrementItem } from "./cartSlice";
import { openCart } from "./menuSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const cartState = useSelector((state) => state.menu.cart);
  const totalCartAmount = cartItems.reduce((total, item) => {
    total = total + item.price * item.quantity;
    return total;
  }, 0);

  return (
    <div className={`cart-frame ${cartState ? "" : "closed"}`}>
      <div className="cartitems-container">
        <h1>Total Cart Amount: ${totalCartAmount}</h1>
        {cartItems.map((item) => (
          <div className="cartitem-card" key={item.id}>
            {console.log("inside cart ", item)}
            <img src={item.imageUrl} />
            <div className="cartitemcard-inner">
              <h2>{item.name}</h2>
              <p>$ {item.price}</p>
              <div className="cartitem-quantity">
                <button
                  className="cart-btn"
                  onClick={() => dispatch(decrementItem(item.id))}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="cart-btn"
                  onClick={() => dispatch(incrementItem(item.id))}
                >
                  +
                </button>
              </div>
              <h4>Total: ${item.quantity * item.price}</h4>
              <button
                className="delete-btn"
                onClick={() => dispatch(removeItem(item))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <button className="gen-btn" onClick={() => dispatch(openCart())}>
          Continue Shopping
        </button>
        <button
          className="gen-btn"
          onClick={() =>
            alert("Functionality to be added for future reference")
          }
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
