import {createSlice} from '@reduxjs/toolkit'

//Creating the initial state for the login authentication
const slice = createSlice({
name:"auth",
intitialState:{
    admin:false,
    Loggedin:false,

},
//reducers manage state in an application,
reducers:{
    signIn:(state,action) => {
        const {name,password} = action.payload;
        state.Loggedin = true;
        state.admin = true
    }
},
signOut:(state)=>{
    state.Loggedin = false;
    state.admin = false
},
createUser:(state,action)=>{

}



})


export default slice.reducer
export const {signIn,signOutm createUser} = slice.actions