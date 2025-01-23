// src/features/events/eventsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_BACKEND;

// Thunk for creating a new event
export const createEvent = createAsyncThunk(
  "events/createEvent",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/admin/newevent`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// slice for getting all the events
export const getEvents = createAsyncThunk(
  "events/getEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/admin/postedevents`);
      return response.data.events;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// slice for delete an event
export const deleteEventById = createAsyncThunk(
  "events/deleteEventById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${apiUrl}/admin/delete/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const editEvent = createAsyncThunk(
  "events/editEvent",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/admin/eventedit/${id}`,
        updatedData
      );
      return response.data.event;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getEventById = createAsyncThunk(
  "events/getEventById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/admin/event/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// Async thunk to register a user for an event
export const registerForEvent = createAsyncThunk(
  "events/registerForEvent",
  async ({ eventId, user }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${apiUrl}/user/events/register/${eventId}`,
        user
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to join the event"
      );
    }
  }
);

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    event: null,
    events: [],
    message: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.event = action.payload.event;
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteEventById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEventById.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.events = state.events.filter(
          (event) => event._id !== action.payload.event._id
        );
      })
      .addCase(deleteEventById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.event = action.payload;
      })
      .addCase(editEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getEventById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.loading = false;
        state.event = action.payload.event;
        state.message = action.payload.message;
      })
      .addCase(getEventById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
      })
      .addCase(registerForEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(registerForEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(registerForEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default eventsSlice.reducer;
