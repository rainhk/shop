import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'username',
    initialState : {name : 'kim', age : 20},
    reducers : {
        changeName(state){
            state.name = "park"
            state.age += 1
        }
    }
})

export let {changeName} = user.actions

let stock = createSlice({
    name : 'stock',
    initialState : [1,2,3]
})


let cartItems = createSlice({
    name : 'items',
    initialState : [
        {id: 0, name : 'cloud lamp', count : 2},
        {id: 2, name : 'Rain storm glass', count : 1}
    ],
    reducers : {
        changeStock(state, items){
            state[0].count += 1
        }
    }
})

export let {changeStock} = cartItems.actions

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cartItems : cartItems.reducer
    }
})