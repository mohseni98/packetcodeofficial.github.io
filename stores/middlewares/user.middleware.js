import { SET_USER, LOGOUT_USER } from '../actionsList';
import Cookies from 'universal-cookie';
import { initSocket } from '../../utils/socket.services';
import { siteConfig } from '../../variables/config';
const cookies = new Cookies();


function loginUser(state, action) {
    let auth = action.auth
    if (auth) {
        cookies.set('token', auth.token, { path: '/' })
        setTimeout(() => {
            initSocket()
        }, 200);
    }
}

function logoutUser(action) {
    // let auth = action.auth
    // if (auth?.token) {
    cookies.remove('token', { path: '/' })
        // setTimeout(() => {
        //     initSocket()
        // }, 200);

    // }
}

const user = store => next => action => {
    let result = next(action)
    if (action.type === SET_USER) {
        loginUser(store.getState(), action)
    }
    if (action.type === LOGOUT_USER) {
        logoutUser(action)
    }
    return result
}

export default user;