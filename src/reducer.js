export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "AD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("cant remove from the basket");
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
export default reducer;
