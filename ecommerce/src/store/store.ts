import { createStore } from 'redux';
import rootReducer from './rootReducer';

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
  whiteList: ['card'],
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor }
