import { createSlice } from '@reduxjs/toolkit'
import data from "../../data/mock";

const initialState = {
    value: [],
    allData: [],
    selectAllImage: false,
    filterImage: ""
}

export const selectedImageSlice = createSlice({
    name: 'selectedImage',
    initialState,
    reducers: {
        selectedImage: (state, action) => {
            // if users want to select image it will be called
            state.value.push(action.payload);
        },
        removeImage: (state, action) => {
            // if users want to unselect image it will be called
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

            let deletedIndex = action.payload.selectedImages;
            let currentImages = action.payload.current;

            const afterDelete = currentImages.images.filter((item, idx) => !deletedIndex.includes(item.id));

            if (afterDelete) {
                state.allData = afterDelete; // Update the data.images array with the filtered array
                state.render = !state.render;
            }

            action.payload.selectedImages.forEach((item, index) => {
                const reduxValueIndex = state.value.indexOf(item);
                if ((reduxValueIndex !== -1)) {
                    state.value.splice(reduxValueIndex, 1)
                }
            });
        },
        deleteAllImages: (state, action) => {
            // if users want to delete all the images it will be called

            state.allData.splice(0, state.allData.length)
            data.images.splice(0, data.images.length)
            state.render = !state.render;
        },
        selectAllImage: (state, action) => {
            // if users want to select all the images it will be called
            
            state.selectAllImage = action.payload;
        },
        filterImages: (state, action) => {
            // it will call when user want to filter images, which is exist below search bar. 
            
            if (action.payload !== 'all') {

                const afterFilter = data?.images.filter((image) => image.fileCategory === action.payload);
                console.log(afterFilter);
                if (afterFilter) {
                    state.allData = afterFilter
                    state.render = !state.render;
                }
            }
            else {
                state.allData = data?.images
            }
        }
    },
})

export const { selectedImage, removeImage, addAllImage, deleteSelectedImage, selectAllImage, filterImages, deleteAllImages } = selectedImageSlice.actions

export default selectedImageSlice.reducer