import { createSlice } from "@reduxjs/toolkit";


export const materialSlice = createSlice({
    name: "material",
    initialState: {
        materialData:null,
    },
    reducers: {
        materialDataUpLoad: (state, action) => {
            state.materialData = action.payload;
        },
    },
});

export const { materialDataUpLoad } = materialSlice.actions;

//#region
//#endregion

export default materialSlice.reducer;