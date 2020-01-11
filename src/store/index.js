import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

import FoodReducer from "./Food";
import CartReducer from "./Cart";

const reducer = combineReducers({
  foodData: FoodReducer,
  cartData: CartReducer
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (process.env.NODE_ENV === "development") {
  window.store = store;
}

export default store;
