import { combineReducers } from "redux";



const user = {
    name: null,
    email: null,
    uid: null,
    login: false,
};

const initialStateUser = {
    user,
};


export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_UID = "CHANGE_UID";
export const CHANGE_LOGIN = "CHANGE_LOGIN";
export const CHANGE_LOGOUT = "CHANGE_LOGOUT";

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

export const change_login = (login) => ({
    type: CHANGE_LOGIN,
    info: login,
});
export const change_logout = () => ({
    type: CHANGE_LOGOUT,
});

export const userReducer = (state = initialStateUser, action) => {
    console.log(action.info);
    switch (action.type) {
        case CHANGE_EMAIL:
            console.log("change email");
            return { ...state, email: action.info };
        case CHANGE_NAME:
            console.log("change name");
            return { ...state, name: action.info };
        case CHANGE_UID:
            console.log("change uid");
            return { ...state, uid: action.info };
        case CHANGE_LOGIN:
            console.log("change login");
            return { ...state, login: action.info };
        case CHANGE_LOGOUT:
            return {undefined, login: false}
        default:
            return state;
    }
};

const todo = {
    id: null,
    text: null,
}
const initialStateTodo = {
    todo,
}
export const CHANGE_TODOID = "CHANGE_TODOID";
export const CHANGE_TODOTEXT = "CHANGE_TODOTEXT";

export const change_todoid = (id) => ({
    type: CHANGE_TODOID,
    info: id,
});
export const change_todoText = (text) => ({
    type: CHANGE_TODOTEXT,
    info: text,
});

export const todoReducer = (state = initialStateTodo, action) => {
    switch (action.type) {
        case CHANGE_TODOID:
            return { ...state, text: action.info };
        case CHANGE_TODOTEXT:
            return { ...state, id: action.info };
        default:
            return state;
    }
};


export const reducers = combineReducers({
    user: userReducer,
    todo: todoReducer,
});
