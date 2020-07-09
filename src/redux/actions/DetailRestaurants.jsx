const GET_DETAIL_RESTAURANTS = "GET_DETAIL_RESTAURANTS";

const getRestaurants = (datas) => {
    return {
        type: GET_DETAIL_RESTAURANTS,
        datas,
    };
};

const fetchRestaurants = () => async (dispatch) => {
    const url =
        "https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city";
    const option = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "user-key": "c42adbcf162ea10973e7265d35f8cf8e",
        },
    };

    const response = await fetch(url, option);
    const result = await response.json();

    dispatch(getRestaurants(result));
};

export { GET_DETAIL_RESTAURANTS, getRestaurants, fetchRestaurants };
