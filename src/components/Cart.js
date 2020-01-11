import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "./NewCard";
import { toggleCart } from "../store/Cart";

const Cart = () => {
  const cartItems = useSelector(state => state.cartData.cartItems);
  const cartIsOpen = useSelector(state => state.cartData.cartIsOpen);
  const dispatch = useDispatch();
  const renderCartItems = items => {
    return items.map((item, index) => (
      <div key={index} className="single-item">
        <Card key={index} item={item} />
        <span className="total-item-price">{item.price * item.quantity}</span>
      </div>
    ));
  };
  const calculateTotal = itemList => {
    let total = 0;
    itemList.forEach(item => {
      total = total + item.quantity * item.price;
    });
    return total;
  };
  return (
    <div className="cart">
      {cartItems.length > 0 && (
        <div className="my-plate-wrapper">
          <div
            className="my-plate"
            onClick={() => {
              dispatch(toggleCart());
            }}
          >
            <div> {cartItems.length}</div>
            <div>My Plate</div>
          </div>
          <div className={"overlay " + (cartIsOpen ? "active" : "")}>
            {cartIsOpen && (
              <div className="visible-when-active">
                <div className="back-btn-container">
                  <button
                    className="back-button"
                    onClick={() => dispatch(toggleCart())}
                  >
                    Close
                  </button>
                </div>
                <div className="item-wrapper">{renderCartItems(cartItems)}</div>
                <hr />
                <div className="cart-total">
                  <h1> Cart Total: {calculateTotal(cartItems)}</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
