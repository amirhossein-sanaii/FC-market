import {createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import { productlistReducer , productDetailReducer } from './reducer/productReducer'

const reduser = combineReducers({
    productList : productlistReducer,
    productDetail : productDetailReducer
})
const initialState = {}
const middleware = [thunk]

const stor = createStore(reduser , initialState , applyMiddleware(...middleware))

export default stor