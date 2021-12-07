import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice({
name:"user",
initialState:[{}],
reducers:{
    getUser:(state) => {
        state.push ({name:"Kitrick Bell"})
        state.push ({name:"rick Bell"})
    }
}


})

export default slice.reducer;

export const {getUser} = slice.actions;