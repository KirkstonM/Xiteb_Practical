import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'light'
};

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark"
        }
    }
});

export const { toggleMode } = modeSlice.actions;
export const currentMode = (state) => state.mode.mode;
export default modeSlice.reducer;