import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';

export const fetchArabic = createAsyncThunk("Languages/fetchArabic",async()=>{
    const res = await fetch("https://raw.githubusercontent.com/EHAB3x/DB/main/languages.json");
    const data = await res.json();
    return data.arabic[0]
});

export const fetchEnglish = createAsyncThunk("Languages/fetchEnglish",async()=>{
    const res = await fetch("https://raw.githubusercontent.com/EHAB3x/DB/main/languages.json");
    const data = await res.json();
    return data.english[0]
});

const LanguagesSlice = createSlice({
    initialState:{landing:{}},
    name: "LanguagesSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchArabic.fulfilled,(state, action)=>{
            return action.payload
        })
        .addCase(fetchEnglish.fulfilled,(state, action)=>{
            return action.payload
        })   
    }
});




export const {} = LanguagesSlice.actions;
export default LanguagesSlice.reducer;