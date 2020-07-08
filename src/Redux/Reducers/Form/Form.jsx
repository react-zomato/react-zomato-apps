import {GET_USER_LOGIN} from '../../Actions'

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_USER_LOGIN:
            return actions.data
        default:
            return state;
    }
}