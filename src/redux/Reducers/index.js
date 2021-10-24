import { combineReducers } from "redux";
import {productReducers,selectedProductsReducer} from "./productReducers";
const reducers = combineReducers({
    allProducts: productReducers,
    product: selectedProductsReducer,
})
export default reducers;