import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseValues } from "../adapters";
import { getData } from "../api";

export const refreshData = createAsyncThunk(
  "appState/refreshData",
  async () => {
    const response = await getData();
    return await parseValues(response);
  }
);
