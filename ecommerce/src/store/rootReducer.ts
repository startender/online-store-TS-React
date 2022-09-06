import { combineReducers } from "redux"
import { cartReducer } from "./cart/reducers"

const RootReducer = combineReducers({
  cart: cartReducer,
})

export type RootState = ReturnType<typeof RootReducer>

export default RootReducer
