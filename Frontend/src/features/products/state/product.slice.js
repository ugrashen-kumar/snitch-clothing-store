import {createSlice} from '@reduxjs/toolkit'


const productSlice = createSlice({
    name : "product",
    initialState : {
        sellerProducts : [],
        products : []
    },
    reducers : {
        setSellerProducts : (state, action) =>{
            state.sellerProducts = action.payload
        },
        setProducts : (state, action) =>{
            state.products = action.palyload
        }
    }
})


export const {setProducts, setSellerProducts} = productSlice.actions
export default productSlice.reducer
