import { combineReducers } from "redux";

const user = {
    email: null,
};

const initialStateUser = {
    user,
};

export const CHANGE_EMAIL = "CHANGE_EMAIL";

export const change_email = (email) => ({
    type: CHANGE_EMAIL,
    info: email,
});

export const userReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case CHANGE_EMAIL:
            return { ...state, id: action.info };
        default:
            return state;
    }
};

export const reducers = combineReducers({
    user: userReducer,
});
