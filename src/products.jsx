import "./products.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openMenu, openCart } from "./menuSlice";
import { addItem } from "./cartSlice";
import Cart from "./cart";

export default function Products() {
  const productsList = useSelector((state) => state.products);
  const menuState = useSelector((state) => state.menu.menu);
  const cartState = useSelector((state) => state.menu.cart);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartItemsQuantity = cartItems.reduce((total, item) => {
    total = total + item.quantity;
    return total;
  }, 0);
  const plantsCatgories = new Array(
    ...new Set(productsList.map((item) => item.category))
  );

  return (
    <div className={`products-frame ${menuState ? "" : "closed"}`}>
      <navbar className="products-navbar">
        <div className="home-page" onClick={() => dispatch(openMenu())}>
          <img src="../public/logo.jpg" className="logo" alt="logo image" />
          <div>
            <h1>Paradise Nursey</h1>
            <p>Where green meets serenity</p>
          </div>
        </div>
        <div className="navbar-center">
          <h1>Plants</h1>
        </div>
        <div className="cart-container" onClick={() => dispatch(openCart())}>
          <img src="../public/cart.png" alt="cart" />
          <h4>{cartItemsQuantity}</h4>
        </div>
      </navbar>
      <Cart />
      {plantsCatgories.map((curr_categorie) => (
        <div className={`products-list ${cartState ? "closed" : ""}`}>
          <h1>{curr_categorie}</h1>

          {productsList
            .filter((item) => {
              return item.category === curr_categorie;
            })
            .map((item) => (
              <div className="item-card" key={item.id}>
                <h3>{item.name}</h3>
                <br />
                <img src={item.imageUrl} className="card-image" />
                <p>{item.description}</p>
                <p>${item.price}</p>
                <button
                  className="item-btn"
                  disabled={
                    cartItems.find((element) => {
                      return element.id === item.id;
                    })
                      ? true
                      : false
                  }
                  onClick={() => dispatch(addItem(item))}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
