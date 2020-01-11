const ADD_TO_CART = "item/ADD_TO_CART";
const TOGGLE_CART = "TOGGLE_CART";

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART
  };
};

const initialState = {
  cartItems: [],
  cartIsOpen: false
};

const CartReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("In add tio cart");
      const itemToAdd = action.payload;
      const indexOfExistingItem = state.cartItems.findIndex(
        item => item.id === itemToAdd.id
      );
      if (itemToAdd.quantity === 0) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, indexOfExistingItem),
            ...state.cartItems.slice(indexOfExistingItem + 1)
          ]
        };
      }

      if (indexOfExistingItem === -1) {
        return {
          ...state,
          cartItems: [...state.cartItems, itemToAdd]
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, indexOfExistingItem),
            itemToAdd,
            ...state.cartItems.slice(indexOfExistingItem + 1)
          ]
        };
      }
    case TOGGLE_CART:
      return {
        ...state,
        cartIsOpen: !state.cartIsOpen
      };
    default:
      return state;
  }
};

export default CartReducer;
