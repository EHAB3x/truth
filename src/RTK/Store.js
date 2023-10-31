import { configureStore } from "@reduxjs/toolkit";
import Languages from "./Slices/Languages";

export const Store = configureStore({
    reducer:{
        "Languages": Languages
    },
})