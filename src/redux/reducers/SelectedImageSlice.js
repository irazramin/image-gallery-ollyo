import {createSlice} from '@reduxjs/toolkit'
import data from "../../data/imageData";

const initialState = {
    value: [],
    allData: []
}

export const selectedImageSlice = createSlice({
    name: 'selectedImage',
    initialState,
    reducers: {
        selectedImage: (state, action) => {
            state.value.push(action.payload);
        },
        removeImage: (state, action) => {
            const index = state.value.indexOf(action.payload)
            if (index !== -1) {
                state.value.splice(index, 1)
            }
        },
        addAllImage: (state, action) => {
            state.allData.push(action.payload);
        },
        deleteSelectedImage: (state, action) => {
            // if we want to delete selected image, this action will be call
            // first we need to remove image from local storage
            // second we also need to remove value from navbar count

            let deletedIndex = action.payload;
            const afterDelete = data.items?.filter((item, idx) => !deletedIndex.includes(item.id));

            if (afterDelete) {
                data.items = afterDelete; // Update the data.items array with the filtered array
                state.render = !state.render;
            }

            action.payload.forEach((item, index) => {
                const reduxValueIndex = state.value.indexOf(item);
                if ((reduxValueIndex !== -1)) {
                    state.value.splice(reduxValueIndex, 1)
                }
            });

        }
    },
})

export const {selectedImage, removeImage, addAllImage, deleteSelectedImage} = selectedImageSlice.actions

export default selectedImageSlice.reducer