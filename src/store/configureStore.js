import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from '../reducers/search';

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

	const saver = store => next => action => {
	    let result = next(action)
	    localStorage['redux-store'] = JSON.stringify(store.getState())
	    return result
	}

  const enhancer = composeEnhancers(applyMiddleware(saver, thunk));


  return createStore(
    searchReducer,
    enhancer
  );
};

export default configureStore;