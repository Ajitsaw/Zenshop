import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle: false,
};

const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.toggle = !state.toggle;
        },
    },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
