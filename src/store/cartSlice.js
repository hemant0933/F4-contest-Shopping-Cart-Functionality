const {createSlice} = require("@reduxjs/toolkit");
const initialState = []

// const initialState = {
//     products:[],
//     amount:0,
//     total:0
// };


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        add(state, action) {

            // Redux 
            // return [...state, action.payload];
             state.push(action.payload);   
        },
        remove(state, action) {
           return state.filter(item => item.id !== action.payload)
        },
        total(state,action) {
            return state.reduce((currenItem) => (currenItem.price + action.payload),0)
        }
    }
})

export const {add,remove,total} = cartSlice.actions;
export default cartSlice.reducer;

// in the earlier version action and state are created seprately 