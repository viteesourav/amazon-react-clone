import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    itemCount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: ((state, action) => {
            const prodInfo = action.payload;
            const isProductExist = state.items.find(item => item.id === prodInfo.id);
            if(isProductExist) {
                //exsiting product is updated...
                isProductExist.productQty += prodInfo.productQty;
            } else {
                //new product is added...
                state.items.push(prodInfo);
            }
            state.itemCount += prodInfo.productQty; //Update the bucketCount by Qty added.
        }),
        removeFromCart: ((state, action) => {
            const prodId = action.payload;
            state.items = state.items.filter(item => item.id != prodId);
            state.itemCount = state.items.reduce((acc, item) => (acc += item.productQty), 0);
        }),
        updateCartItem: ((state, action) => {
            const {productId, operation} = action.payload;
            const isProductExist = state.items.find(item => item.id === productId);
            if(isProductExist) {
                isProductExist.productQty = (operation === 'Increment') ? isProductExist.productQty+1 : isProductExist.productQty-1;
            }
            state.itemCount = (operation === 'Increment') ? state.itemCount+1: state.itemCount-1;
        })
    }
});

export const {addToCart, removeFromCart, updateCartItem} = cartSlice.actions;
export default cartSlice.reducer;