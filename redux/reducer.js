import React from "react";

const initialState = {
  items: {},
  resturantName: "",
  totalAmount: 0.0,
};
function reducer(state = initialState, action) {
  const addedProducts = action.payload;
  switch (action.type) {
    case "ADD_TO_CART": {
      console.log(addedProducts);
      return {
        ...state,
        resturantName: addedProducts.tittle,
        totalAmount: state.totalAmount + addedProducts.price,
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        resturantName: addedProducts.tittle,
        totalAmount: state.totalAmount - addedProducts.price,
      };
    }
  }

  return state;
}

export default reducer;
