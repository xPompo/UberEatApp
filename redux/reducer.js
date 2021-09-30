const initialState = {
  items: [],
  totalAmount: 0,
};

function reducer(state = initialState, action) {
  const addedProducts = action.payload;
  switch (action.type) {
    case "ADD_TO_CART": {
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
        totalAmount:
          (state.totalAmount * 100 + addedProducts.price * 100) / 100,
      };
    }

    case "REMOVE_FROM_CART": {
      const filterdData = state.items.filter((el) => {
        return el.tittle !== addedProducts.tittle;
      });
      return {
        ...state,
        items: filterdData,
        totalAmount:
          (state.totalAmount * 100 - addedProducts.price * 100) / 100,
      };
    }
  }

  return state;
}

export default reducer;
