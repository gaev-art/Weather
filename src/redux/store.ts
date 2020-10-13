import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {WeatherReducer} from './weather-Reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


const rootReducer = combineReducers({
    weatherPage: WeatherReducer,

});

export type AppStateType = ReturnType<typeof rootReducer>

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
