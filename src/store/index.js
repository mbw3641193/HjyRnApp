//创建store
import { createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, persistCombineReducers } from 'redux-persist';
import reducer from './reducer'; //相当于import reducer from './reducer/index'; 不写index就会默认去找index

// 非持久化存储配置
// let store = createStore(reducer);
// export default store;

// 持久化存储配置
const config = {
    key: 'root',
    storage: AsyncStorage,
};

const persistReducers = persistCombineReducers(config, {
    reducer,
});

const configureStore = () => {
    const store = createStore(persistReducers);
    const persistor = persistStore(store);

    return { persistor, store };
};

export default configureStore;


// configureStore.js

// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

// import rootReducer from './reducers'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }