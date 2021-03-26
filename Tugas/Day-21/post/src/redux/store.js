import {applyMiddleware, combineReducers, createStore} from 'redux';
import ThunkMiddleware from 'redux-thunk';
import authReducer from './Auth/reducer';
import postReducer from './Product/reducer';
import userReducer from './User/reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  product: postReducer,
  user: userReducer,


});

const store=createStore(rootReducer, applyMiddleware(ThunkMiddleware))

// export default store;
