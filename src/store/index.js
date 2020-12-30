import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { refreshData } from "../effects/refreshData";
import { selectRandomQuote } from "../domain";

const stateSlice = createSlice({
  name: "appState",
  initialState: {
    loading: true,
    currentValue: 0,
    futureValue: 0,
    quote: selectRandomQuote(),
  },
  reducers: {
    updateQuote(state, action) {
      state.quote = action.payload;
    },
  },
  extraReducers: {
    [refreshData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [refreshData.fulfilled]: (state, { payload }) => {
      const { today, tomorrow } = payload;
      state.currentValue = today;
      state.futureValue = tomorrow;
      state.loading = false;
      state.quote = selectRandomQuote();
    },
    [refreshData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const { actions, reducer } = stateSlice;

export const {
  updateCurrent,
  updateFuture,
  updateLoading,
  updateQuote,
} = actions;

export const store = configureStore({ reducer });
export const selectAppState = (state) => state;
