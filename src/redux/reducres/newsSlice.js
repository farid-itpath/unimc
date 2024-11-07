import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../../api';

export const getNewsCategories = createAsyncThunk(
  'news/getNewsCategories',
  async (_, {rejectWithValue}) => {
    try {
      return await api.news.getNewsCategories();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getNews = createAsyncThunk(
  'news/getNews',
  async (_, {rejectWithValue}) => {
    try {
      return await api.news.getNews();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getSingleNews = createAsyncThunk(
  'news/getSingleNews',
  async (data, {rejectWithValue}) => {
    try {
      return await api.news.getSingleNews(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  categories: null,
  categoriesLoading: false,
  categoriesError: null,

  news: null,
  newsLoading: false,
  newsError: null,

  singleNews: null,
  singleNewsLoading: false,
  singeNewsError: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    clearNews: (state, _) => {
      state.singleNews = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(getNewsCategories.fulfilled, (state, action) => {
      state.categories = action.payload?.data?.data?.result;
      state.categoriesLoading = false;
    });
    builder.addCase(getNewsCategories.pending, (state, _) => {
      state.categoriesLoading = true;
    });
    builder.addCase(getNewsCategories.rejected, (state, action) => {
      state.categoriesError = action.payload;
      state.categoriesLoading = false;
    });

    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload?.data?.data?.result;
      state.newsLoading = false;
    });
    builder.addCase(getNews.pending, (state, _) => {
      state.newsLoading = true;
    });
    builder.addCase(getNews.rejected, (state, action) => {
      state.newsError = action.payload;
      state.newsLoading = false;
    });

    builder.addCase(getSingleNews.fulfilled, (state, action) => {
      state.singleNews = action.payload?.data?.data;
      state.singleNewsLoading = false;
    });
    builder.addCase(getSingleNews.pending, (state, _) => {
      state.singleNewsLoading = true;
    });
    builder.addCase(getSingleNews.rejected, (state, action) => {
      state.singeNewsError = action.payload;
      state.singleNewsLoading = false;
    });
  },
});
export const {clearNews} = newsSlice.actions;
export default newsSlice.reducer;
