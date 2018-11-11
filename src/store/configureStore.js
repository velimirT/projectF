import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from '../reducers/search';

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const enhancer = composeEnhancers(applyMiddleware(thunk));

  return createStore(
    searchReducer,
    enhancer
  );
};

export default configureStore;