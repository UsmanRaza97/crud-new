import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducer from './Redux/Reducer';
import { counterReducer } from './Components/counter/reducer';

const rootReducer = combineReducers({ counterReducer, Reducer });
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
