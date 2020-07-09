import { GET_RESTAURANT_DETAILS } from "./types";

export const getRestaurantDetails = (id) => async (dispatch) => {
    let url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`;

    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "user-key": "c42adbcf162ea10973e7265d35f8cf8e",
        },
    };

    let response = await fetch(url, options);
    let results = await response.json();

    dispatch({
        type: GET_RESTAURANT_DETAILS,
        payload: results,
    });
};
