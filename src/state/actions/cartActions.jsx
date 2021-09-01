export const addCart=(product)=>{
    return ((dispatch)=>{
        dispatch({
            type : "ADD_TO_CART",
            data : product,
        })
    })
}

export const removeCart=(id)=>{
    return ((dispatch)=>{
        dispatch({
            type : "REMOVE_CART",
            data : id
        })
    })
}