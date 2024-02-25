
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProgramList = createAsyncThunk("getProgramList", async (id?: string) => {
    const res = await fetch('https://raw.githubusercontent.com/StreamCo/stan-tv-coding-challenge/master/reactjs/data.json');
    return res?.json();
});
