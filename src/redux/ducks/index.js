import { combineReducers } from "redux";

const user = {
    name: null,
    email: null,
    uid: null,
};

const initialStateUser = {
    user,
};

export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_UID = "CHANGE_UID";

export const change_email = (email) => ({
    type: CHANGE_EMAIL,
    info: email,
});

export const change_name = (name) => ({
    type: CHANGE_NAME,
    info: name,
});

export const change_uid = (uid) => ({
    type: CHANGE_UID,
    info: uid,
});

export const userReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case CHANGE_EMAIL:
            return { ...state, email: action.info };
        case CHANGE_NAME:
            return { ...state, name: action.info };
        case CHANGE_UID:
            return { ...state, uid: action.info };
        default:
            return state;
    }
};

export const reducers = combineReducers({
    user: userReducer,
});
