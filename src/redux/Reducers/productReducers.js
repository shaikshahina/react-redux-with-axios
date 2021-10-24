import { actionTypes } from "../Constants/actionTypes";
const intialState = {
    products: [],
  };

export const productReducers = (state = intialState, { type, payload }) => {
    switch(type){
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;

    }
}
export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case actionTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case actionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };