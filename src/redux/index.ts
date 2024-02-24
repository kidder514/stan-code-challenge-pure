import { configureStore } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';

export const store = configureStore({
  reducer: {
    routing: routerReducer
  },
});
