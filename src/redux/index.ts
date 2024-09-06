import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/user.reducer';
import notifyReducer from './reducers/notify.reducer';
import modelReducer from './reducers/model.reducer';
import visaReducer from './reducers/visa.reducer';

import visaService from './services/visa.service';
import imageService from './services/image.service';
import verifierService from './services/verifier.service';
import authServices from './services/user.service';

const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
        notify: notifyReducer,
        model: modelReducer,
        visa: visaReducer,
        [visaService.reducerPath]: visaService.reducer,
        [imageService.reducerPath]: imageService.reducer,
        [verifierService.reducerPath]: verifierService.reducer,
        [authServices.reducerPath]: authServices.reducer
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(visaService.middleware)
            .concat(imageService.middleware)
            .concat(verifierService.middleware)
            .concat(authServices.middleware)
});

export default store;

export type IAppDispatch = typeof store.dispatch;

export type IRootState = ReturnType<typeof store.getState>;
