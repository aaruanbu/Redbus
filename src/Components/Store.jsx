import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import Stats from "./Slices";
export const Stres = configureStore({
    reducer: {
        datas: Stats
    }
    , middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable state check
        }),
})
