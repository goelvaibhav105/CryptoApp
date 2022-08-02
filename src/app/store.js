import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});


// // Creating a store 
//  1 .. Here we can write reducer 
//  2.. reducer Path we have to provide only 
//  3.. Add Provider and Store to our index.js Component to wrap our App.js
