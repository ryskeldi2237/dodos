import { combineReducers, createStore } from "redux";
import { product } from './product'
import { price } from './price'
const rootReducer = combineReducers({product, price})
export const store = createStore(rootReducer);