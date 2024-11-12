import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../../api';

export const getEventsAndNews = createAsyncThunk(
  'generic/getEventsAndNews',
  async (_, {rejectWithValue}) => {
    try {
      return await api.generic.getEventsAndNews();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const searchEventsAndNews = createAsyncThunk(
  'generic/searchEventsAndNews',
  async (data, {rejectWithValue}) => {
    try {
      return await api.generic.searchEventsAndNews(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  todaysEvents: null,
  upcomingEvents: null,
  news: null,
  loading: false,
  error: null,
};

export const genericSlice = createSlice({
  name: 'generic',
  initialState,
  reducers: {
    clearSearchResult: (state, _) => {
      state.todaysEvents = null;
      state.upcomingEvents = null;
      state.news = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getEventsAndNews.fulfilled, (state, action) => {
        state.todaysEvents = action.payload?.data?.data?.today_events?.result;
        state.upcomingEvents =
          action.payload?.data?.data?.upcoming_events?.result;
        state.news = action.payload?.data?.data?.news?.result;
        state.loading = false;
      })
      .addCase(getEventsAndNews.pending, (state, _) => {
        state.loading = true;
      })
      .addCase(getEventsAndNews.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });

    builder
      .addCase(searchEventsAndNews.fulfilled, (state, action) => {
        state.todaysEvents = action.payload?.data?.data?.today_events?.result;
        state.upcomingEvents =
          action.payload?.data?.data?.upcoming_events?.result;
        state.news = action.payload?.data?.data?.news?.result;
        state.loading = false;
      })
      .addCase(searchEventsAndNews.pending, (state, _) => {
        state.loading = true;
      })
      .addCase(searchEventsAndNews.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});
export const {clearSearchResult} = genericSlice.actions;
export default genericSlice.reducer;
