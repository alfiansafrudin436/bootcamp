import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import ThunkMiddleware from 'redux-thunk';
import authReducer from './Auth/reducer';
import postReducer from './Product/reducer';
import userReducer from './User/reducer';

const presistConfig={
    key:'MyApps',
    storage:AsyncStorage,
    blacklist:['product']
}
const rootReducer = combineReducers({
  auth: authReducer,
  product: postReducer,
  user: userReducer,
});

const pReducer=persistReducer(presistConfig, rootReducer)
export const store = createStore(pReducer, applyMiddleware(ThunkMiddleware));

export const persistor = persistStore(store)
export default {};
