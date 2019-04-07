import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import burgerBuilderReducer from './store/reducers/burgerBuilderReducer'
import orderReducer from './store/reducers/orderReducers'
import authReducer from './store/reducers/authReducer'
import CreateSagaMiddleWare from 'redux-saga'
import {watchAuth, watchBurgerBuilder, watchOrder} from './store/Sagas/rootSaga'

const rootReducer=combineReducers({
    burgerBuilder:burgerBuilderReducer,
    order:orderReducer,
    auth:authReducer
});

const sagaMiddleWare=CreateSagaMiddleWare();

const composeEnhancers =  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose; //to add the redux dev tool (only in the development mode)

const store=createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk, sagaMiddleWare)));

sagaMiddleWare.run(watchAuth);
sagaMiddleWare.run(watchBurgerBuilder);
sagaMiddleWare.run(watchOrder);

const app=(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
