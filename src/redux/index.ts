import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/user.reducer';
import notifyReducer from './reducers/notify.reducer';
import modelReducer from './reducers/model.reducer';
import visaReducer from './reducers/visa.reducer';

import visaService from './services/visa.service';

const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
        notify: notifyReducer,
        model: modelReducer,
        visa: visaReducer,
        [visaService.reducerPath]: visaService.reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(visaService.middleware)
});

export default store;

export type IAppDispatch = typeof store.dispatch;

export type IRootState = ReturnType<typeof store.getState>;
