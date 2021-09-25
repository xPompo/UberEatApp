const initialState = {
  items: [],
  totalAmount: 0,
};
function reducer(state = initialState, action) {
  const addedProducts = action.payload;
  switch (action.type) {
    case "ADD_TO_CART": {
      if (state.items[addedProducts.tittle]) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          { name: addedProducts.tittle, price: addedProducts.price },
        ],
        totalAmount: parseFloat(state.totalAmount + addedProducts.price),
      };
    }
    case "REMOVE_FROM_CART": {
      const filterdData = state.items.filter(
        (el) => el.name !== addedProducts.tittle
      );
      return {
        ...state,
        items: filterdData,
        totalAmount: parseFloat(state.totalAmount - addedProducts.price),
      };
    }
  }

  return state;
}

export default reducer;
