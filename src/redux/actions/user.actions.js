import {createAction} from "redux-actions";

export const userLogin = createAction('USERLOGIN')
export const userLogout = createAction('USERLOGOUT')

export const login = (payload) => async (dispatch) => {
    dispatch(userLogin(payload));
}

export const logout = () => async (dispatch) => {
    dispatch(userLogout());
}


