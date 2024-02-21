import { CHANGE_LANGUAGE, CHANGE_CITY } from '../actionsList';
import { changeBodyDirection } from '../../utils/useful'
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export function ChangeLanguage(state, action) {
    let language = action.value
    if (language) {
        changeBodyDirection(language)
    }
}

export function ChangeCity(state, action) {

    cookies.set('city', action?.value?._id, { path: '/' })
}



const settings = store => next => action => {
    // console.log(action)
    let result = next(action)
    if (action.type === CHANGE_LANGUAGE) {
        ChangeLanguage(store.getState(), action)
    }

    if (action.type === CHANGE_CITY) {
        ChangeCity(store.getState(), action)
    }


    return result
}

export default settings;