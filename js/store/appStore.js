import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import rootReducer from '../reducers';

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(

//   // applyMiddleware(thunk, logger),
//   applyMiddleware(thunk),
//   autoRehydrate()

// ));


const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, logger),
  // applyMiddleware(thunk),
  autoRehydrate()
));

persistStore(store, {storage: AsyncStorage});

export default store;
