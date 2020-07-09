import { GET_DETAIL_RESTAURANTS } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_DETAIL_RESTAURANTS:
            return actions.datas;

        default:
            return state;
    }
};
