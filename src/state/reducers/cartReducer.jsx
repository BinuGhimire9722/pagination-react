let defaultState = {
    cartProduct: [],
    total: 0
}


const addCart=(state, actions)=>{
    let isFound = state.cartProduct.find((item)=>{
        return item.id == actions.data.id
    })

    if(!isFound){
        let newArr = [...state.cartProduct, actions.data];
        let total = state.total + actions.data.price;
        let newState = { ...state, ...{ cartProduct: newArr, total } };
        return newState;
    }else{
        return state;
    }
}
export const cartReducer = (state = defaultState, actions) => {

    if (actions.type == "ADD_TO_CART") {
        return addCart(state, actions);

    }
    else if (actions.type == "REMOVE_CART") {
        let filtered = state.cartProduct.filter((item) => {
            return item.id != actions.data
        })


        let filterItem = state.cartProduct.filter((item)=>{
            return item.id == actions.data
        })

        let total = state.total - filterItem[0].price;
        return { ...state, ...{ cartProduct: filtered,total } }
    }
    else {
        return state;
    }

}

