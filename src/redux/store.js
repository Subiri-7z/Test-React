/** @format */
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import user from './reducers/user.reducer.js'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const persistConfig = {
    key: 'persist',
    storage: storage,
    whitelist: ['user']
}

const reducer = combineReducers({
    user,
})

const pReducer = persistReducer(persistConfig, reducer)

const configureStore = () => {
    let store = createStore(pReducer, composeEnhancer(applyMiddleware(thunk)))
    let persistor = persistStore(store)

    return {store, persistor}
}

export default configureStore
