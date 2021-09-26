const initialState = {
  items: [],
  resturanName: "",
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
          {
            tittle: addedProducts.tittle,
            price: addedProducts.price,
            image: addedProducts.image,
          },
        ],
        resturanName: addedProducts.name,
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
        resturanName: addedProducts.name,
        totalAmount: parseFloat(state.totalAmount - addedProducts.price),
      };
    }
  }

  return state;
}

export default reducer;
