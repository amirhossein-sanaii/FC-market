export const productlistReducer = (state = {product : []} , action) => {

    switch(action.type){
        case "PRODUCT_LIST_REQUEST":
            return{
                loading:true,
                product:[]
            }
        case "PRODUCT_LIST_SUCCESS":
            return{
                loading:false,
                product: action.payload
            }

        default:
            return state
    }

}

export const productDetailReducer = (state = {product : {}} , action) => {

    switch(action.type){
        case "PRODUCT_DETAIL_REQUEST":
            return{
                loading:true,
                ...state
            }
        case "PRODUCT_DETAIL_SUCCESS":
            return{
                loading:false,
                product: action.payload
            }

        default:
            return state
    }

}