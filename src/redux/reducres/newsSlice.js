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

const initialState = {
  categories: null,
  categoriesLoading: false,
  categoriesError: null,

  news: null,
  newsLoading: false,
  newsError: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
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
  },
});
export const {} = newsSlice.actions;
export default newsSlice.reducer;
