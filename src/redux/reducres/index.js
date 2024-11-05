import {combineReducers} from '@reduxjs/toolkit';
import eventsSlice from './eventsSlice';
import newsSlice from './newsSlice';

export const reducers = combineReducers({
  events: eventsSlice,
  news: newsSlice,
});
