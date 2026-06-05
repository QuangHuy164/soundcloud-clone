import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import soundcloneApi from './services/soundcloneCore';

const store = configureStore({
  reducer: {
    [soundcloneApi.reducerPath]: soundcloneApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(soundcloneApi.middleware),
});

export default store;
