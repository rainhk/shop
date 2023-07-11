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
            state.map((a, i)=>{
                if(state[i].id == id.payload){
                    state[i].count += 1
                }
            })
        },
        addItem(state, item){

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