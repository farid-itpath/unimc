import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: {token: null, showOnBoarding: true, userData: null, user_id: null},
  userRole: {},
  isDriver: null,
  userAddress: {},
  favAddress: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userData: (state, action) => {
      state.userInfo = action.payload;
    },
    userRole: (state, action) => {
      state.userRole = action.payload;
    },
    userRoleData: (state, action) => {
      state.isDriver = action.payload;
    },
    onBoardingHandler: (state, action) => {
      state.showOnBoarding = action.payload;
    },
    setAddressDispatch: (state, action) => {
      state.userAddress = action.payload;
    },
    setFavAddressDispatch: (state, action) => {
      state.favAddress = action.payload;
    },
  },
});

export const {
  userData,
  onBoardingHandler,
  userRole,
  userRoleData,
  setAddressDispatch,
  setFavAddressDispatch,
} = authSlice.actions;
export default authSlice.reducer;
