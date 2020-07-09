import { combineReducers } from "redux";
import restaurants from "./Restaurant";
import form from "./Form";
import restaurantReducer from "./detailrestaurants";

export default combineReducers({
    restaurants,
    form,
    restaurant: restaurantReducer,
});
