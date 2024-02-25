import { configureStore } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';
import programReducer from './programList.slice';

export const store = configureStore({
    reducer: {
        programList: programReducer,
        routing: routerReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch