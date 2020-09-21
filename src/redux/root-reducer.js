import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import userReducer from './user/reducer';
import cartReducer from './cart/reducer';
import directoryReducer from './directory/reducer';
import shopReducer from './shop/reducer';
import routingReducer from './routing/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  routing: routingReducer
})

export default persistReducer(persistConfig, rootReducer)