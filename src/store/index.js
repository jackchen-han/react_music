import { applyMiddleware, createStore,compose } from 'redux';
import reducer from './reducer'
import thunk from 'thunk';

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSER__ || compose;

const store = createStore(reducer,applyMiddleware(thunk))

