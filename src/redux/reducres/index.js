import {combineReducers} from '@reduxjs/toolkit';
import eventsSlice from './eventsSlice';
import newsSlice from './newsSlice';
import genericSlice from './genericSlice';
import aboutSlice from './aboutSlice';

export const reducers = combineReducers({
  events: eventsSlice,
  news: newsSlice,
  generic: genericSlice,
  about: aboutSlice,
});
