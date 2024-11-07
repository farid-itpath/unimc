import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../../api';

export const getEventsCategories = createAsyncThunk(
  'events/getEventsCategories',
  async (_, {rejectWithValue}) => {
    try {
      return await api.events.getEventsCategories();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getEvents = createAsyncThunk(
  'events/getEvents',
  async (_, {rejectWithValue}) => {
    try {
      return await api.events.getEvents();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getEvent = createAsyncThunk(
  'events/getEvent',
  async (data, {rejectWithValue}) => {
    try {
      return await api.events.getEvent(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getUpcomingEvents = createAsyncThunk(
  'events/getUpcomingEvents',
  async (_, {rejectWithValue}) => {
    try {
      return await api.events.getUpcomingEvents();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getTodaysEvents = createAsyncThunk(
  'events/getTodaysEvents',
  async (_, {rejectWithValue}) => {
    try {
      return await api.events.getTodaysEvents();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  categories: null,
  categoriesLoading: false,
  categoriesError: null,

  events: null,
  eventsLoading: false,
  eventsError: null,

  event: null,
  eventLoading: false,
  eventError: null,

  upcomingEvents: null,
  upcomingEventsLoading: false,
  upcomingEventsError: null,

  todaysEvents: null,
  todaysEventsLoading: false,
  todaysEventsError: null,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    clearEvent: (state, _) => {
      state.event = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(getEventsCategories.fulfilled, (state, action) => {
      state.categories = action.payload?.data?.data?.result;
      state.categoriesLoading = false;
    });
    builder.addCase(getEventsCategories.pending, (state, _) => {
      state.categoriesLoading = true;
    });
    builder.addCase(getEventsCategories.rejected, (state, action) => {
      state.categoriesError = action.payload;
      state.categoriesLoading = false;
    });

    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.events = action.payload?.data?.data?.result;
      state.eventsLoading = false;
    });
    builder.addCase(getEvents.pending, (state, _) => {
      state.eventsLoading = true;
    });
    builder.addCase(getEvents.rejected, (state, action) => {
      state.eventsError = action.payload;
      state.eventsLoading = false;
    });

    builder.addCase(getEvent.fulfilled, (state, action) => {
      state.event = action.payload?.data?.data;
      state.eventLoading = false;
    });
    builder.addCase(getEvent.pending, (state, _) => {
      state.eventLoading = true;
    });
    builder.addCase(getEvent.rejected, (state, action) => {
      state.eventError = action.payload;
      state.eventLoading = false;
    });

    builder.addCase(getUpcomingEvents.fulfilled, (state, action) => {
      state.upcomingEvents = action.payload?.data?.data?.result;
      state.upcomingEventsLoading = false;
    });
    builder.addCase(getUpcomingEvents.pending, (state, _) => {
      state.upcomingEventsLoading = true;
    });
    builder.addCase(getUpcomingEvents.rejected, (state, action) => {
      state.upcomingEventsError = action.payload;
      state.upcomingEventsLoading = false;
    });

    builder.addCase(getTodaysEvents.fulfilled, (state, action) => {
      state.todaysEvents = action.payload?.data?.data?.result;
      state.todaysEventsLoading = false;
    });
    builder.addCase(getTodaysEvents.pending, (state, _) => {
      state.todaysEventsLoading = true;
    });
    builder.addCase(getTodaysEvents.rejected, (state, action) => {
      state.todaysEventsError = action.payload;
      state.todaysEventsLoading = false;
    });
  },
});
export const {clearEvent} = eventsSlice.actions;
export default eventsSlice.reducer;
