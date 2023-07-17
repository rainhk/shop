import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'username',
    initialState : {name : 'kim', age : 20},
    reducers : {
        changeName(state){
            state.name = "park"
            
        },
        increaseAge(state){
            state.age += 1
        }
    }
})

export let {changeName, increaseAge} = user.actions

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
        changeStock(state, id){
            let index = state.findIndex((a)=>{return a.id == id.payload })
            state[index].count++
        },
        addItem(state, item){
            state.push(item.payload)
        }
    }
})

export let {changeStock, addItem} = cartItems.actions

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cartItems : cartItems.reducer
    }
})


