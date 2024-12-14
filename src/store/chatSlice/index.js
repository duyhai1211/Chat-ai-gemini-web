import { createSlide } from "@reduxjs/toolkit";

const initData = {
    data: [],
}

const chatSlice = createSlide ({
    name: 'chat',
    initialState: initData,
    reducers:{
        addChat: (starte, action) =>{
            state.data.push('Hello')
        }
    }
})

export const { addChat } = chatSlice.action;

export default chatSlice.reducer;