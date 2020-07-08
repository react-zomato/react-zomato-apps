const GET_RESTAURANT = "GET_RESTAURANT";

const getRestaurant = (datas) => {
    return {
        type: GET_RESTAURANT,
        datas,
    };
};

const fetchRestaurant = () => async (dispatch) => {
    const url =
        "https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city";
    const option = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "user-key": "96f05ef350bcc95320fa427793a93db3",
        },
    };

    const response = await fetch(url, option);
    const result = await response.json();

    dispatch(getRestaurant(result));
};

export { GET_RESTAURANT, getRestaurant, fetchRestaurant };
