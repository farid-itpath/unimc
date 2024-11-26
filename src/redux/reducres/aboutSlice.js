import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../../api';

export const getAbout = createAsyncThunk(
  'about/getAbout',
  async (_, {rejectWithValue}) => {
    try {
      return await api.about.getAbout();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getBannerImages = createAsyncThunk(
  'about/getBannerImages',
  async (data, {rejectWithValue}) => {
    try {
      return await api.about.getBannerImages(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const contactUs = createAsyncThunk(
  'about/contactUs',
  async (data, {rejectWithValue}) => {
    try {
      return await api.about.contactUs(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  aboutData: null,
  aboutLoading: false,
  aboutError: null,
  aboutCategories: null,
  aboutImagesId: null,
  aboutBannerImages: null,
  aboutBannerImagesLoading: false,
  aboutBannerImagesError: null,

  contactUsLoading: false,
  contactUsError: '',
  contactUsMessage: '',
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAbout.fulfilled, (state, action) => {
        state.aboutData = action.payload?.data?.data?.result?.filter(
          item => item?.alias !== 'banner_image',
        );
        state.aboutLoading = false;
        state.aboutCategories = action.payload?.data?.data?.result
          ?.filter(item => item?.alias !== 'banner_image')
          ?.map(item => item?.title);
        state.aboutImagesId = action.payload?.data?.data?.result?.find(
          item => item?.alias === 'banner_image',
        )?.id;
      })
      .addCase(getAbout.pending, (state, _) => {
        state.aboutLoading = true;
      })
      .addCase(getAbout.rejected, (state, action) => {
        state.aboutLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(getBannerImages.fulfilled, (state, action) => {
        state.aboutBannerImages = action.payload?.data?.data?.banner_images;
        state.aboutBannerImagesLoading = false;
      })
      .addCase(getBannerImages.pending, (state, _) => {
        state.aboutBannerImagesLoading = true;
      })
      .addCase(getBannerImages.rejected, (state, action) => {
        state.aboutBannerImagesLoading = false;
        state.aboutBannerImagesError = action.payload;
      });

    builder
      .addCase(contactUs.fulfilled, (state, action) => {
        state.contactUsMessage = action.payload?.data?.message;
        state.contactUsLoading = false;
      })
      .addCase(contactUs.pending, (state, _) => {
        state.contactUsLoading = true;
      })
      .addCase(contactUs.rejected, (state, action) => {
        state.contactUsLoading = false;
        state.contactUsError = action.payload;
      });
  },
});
export const {} = aboutSlice.actions;
export default aboutSlice.reducer;
