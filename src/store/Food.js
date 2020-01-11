import { categories, subCategory, items } from "../dummyData/data";

const ON_COURSE_CHANGE = "ON_COURSE_CHANGE";
const UPDATE_ITEM_QUANTITY = "UPDATE_ITEM_QUANTITY";

export const onCourseChange = course => {
  return {
    type: ON_COURSE_CHANGE,
    payload: course
  };
};

export const updateItemQuantity = (quantity, itemId) => {
  return {
    type: UPDATE_ITEM_QUANTITY,
    payload: { quantity, itemId }
  };
};

const initialState = {
  categories,
  subCategory,
  items,
  activeTab: categories[0]
};

const FoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_COURSE_CHANGE:
      return {
        ...state,
        activeTab: action.payload
      };
    case UPDATE_ITEM_QUANTITY:
      const { quantity, itemId } = action.payload;
      const indexOfItemToUpdate = state.items.findIndex(
        item => item.id === itemId
      );
      let itemToUpdate = state.items[indexOfItemToUpdate];
      itemToUpdate.quantity = quantity;
      return {
        ...state,
        items: [
          ...state.items.slice(0, indexOfItemToUpdate),
          itemToUpdate,
          ...state.items.slice(indexOfItemToUpdate + 1)
        ]
      };

    default:
      return state;
  }
};

export default FoodReducer;
