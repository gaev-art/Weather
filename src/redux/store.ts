import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {weatherReducer} from './weatherReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {useSelector, TypedUseSelectorHook} from 'react-redux'


const rootReducer = combineReducers({
  weatherPage: weatherReducer,

});


export type AppStateType = ReturnType<typeof rootReducer>

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector