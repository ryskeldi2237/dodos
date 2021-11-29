const defaultState = {
    products: []
}
export const reducer = (state = defaultState, action) => {
    switch(action.type){
        case 'ADD__PRODUCT' :
            return {...state, products: [...state.products, action.payload]}
            case 'REMOVE__PRODUCT' :
                return {...state, products: state.products.filter(item => item.id !== action.payload)}
        default:
            return state
    }
}