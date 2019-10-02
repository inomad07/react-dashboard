import { createStore, applyMiddleware } from 'redux';
import rootReducer  from './rootReducer';


const Store = (initialState) => {
  return createStore(
    rootReducer,
    initialState
  );
};

export default Store;
