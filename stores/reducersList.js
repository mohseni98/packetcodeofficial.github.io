import { combineReducers } from 'redux';
import settingsReducer from './reducers/settings.reducer';
import userReducer from './reducers/user.reducer';
import cartReducer from './reducers/cart.reducer';
import notifsReducer from './reducers/notifs.reducer';
import messengersReducer from './reducers/messegers.reducer';

import resourceReducer from './reducers/resource.reducer';

// import shoppingCartReducer from './reducers/shppoingCart.reducer.js';

export default combineReducers({
    messengers: messengersReducer,
    settings: settingsReducer,
    user: userReducer,
    cart: cartReducer,
    resource: resourceReducer,
    notifs: notifsReducer,


    // shoppingCart: shoppingCartReducer
});