export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'LOGIN_USER';
export const CHANGE_BALANCE = 'CHANGE_BALANCE';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setUser(info, auth, loggedin, role) {
    return { type: SET_USER, info, auth, loggedin, role };
}

export function setCurrentUser(info) {
    return { type: SET_CURRENT_USER, info };
}


export function logoutUser() {
    return { type: LOGOUT_USER };
}

export function changeBalance(data) {
    return { type: CHANGE_BALANCE, data };
}