import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'username',
    initialState : 'kim'
})

let stock = createSlice({
    name : 'stock',
    initialState : [1,2,3]
})


let cartItems = createSlice({
    name : 'items',
    initialState : [
        {id: 0, name : 'cloud lamp', count : 2},
        {id: 2, name : 'Rain storm glass', count : 1}
    ]
})

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cartItems : cartItems.reducer
    }
})