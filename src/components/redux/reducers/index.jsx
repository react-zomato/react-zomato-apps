import { combineReducers } from "redux";
import restaurantReducer from "./detailrestaurants";

export default combineReducers({
    restaurant: restaurantReducer,
});
