import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import initialState from 'store/initialState'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ 
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [...getDefaultMiddleware({serializableCheck: false}), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
export default store;
