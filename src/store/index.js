import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ 
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({serializableCheck: false}), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
export default store;
