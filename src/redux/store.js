import { configureStore } from '@reduxjs/toolkit'
import selectedImageReducer from "./reducers/SelectedImageSlice";
export const store = configureStore({
    reducer: {
        selectedImage: selectedImageReducer
    },
})