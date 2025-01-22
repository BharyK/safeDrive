import { all, fork } from 'redux-saga/effects';
import AuthReducer from './slice/AuthReducer';
import GlobalReducer from './slice/GloalLoaderReducer';
import DarkModeReducer from './slice/DarkModeReducer';

import { AuthSagas } from './sagas/AuthSagas';

//Reducer/Slice file goes here

export const rootReducers = {
    authReducer : AuthReducer,
    globalLoaderReducer: GlobalReducer,
    darkModeReducer: DarkModeReducer,
}

//Sagas file goes here
export const rootSagas = function* () {
    yield all ([
        fork(AuthSagas)
    ])
}