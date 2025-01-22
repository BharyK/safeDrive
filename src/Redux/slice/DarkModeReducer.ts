import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
    darkMode: boolean
}

const initialState: CounterState = {
    darkMode: false
};

export const darkModeSlice = createSlice({
    name: "globalLoader",
    initialState,
    reducers: {
        darkModeActive: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const { darkModeActive }: any = darkModeSlice.actions;
export default darkModeSlice.reducer;