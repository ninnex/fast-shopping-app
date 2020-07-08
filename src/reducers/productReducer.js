import * as actions from '../actions/actionTypes'
const initialState = { items : []}

const productReducer = function  (state = initialState, action){

    switch(action.type){
        case actions.FETCH_PRODUCTS:
            return {...state, items: action.payload}

        default: 
            return state
    }

}

export default productReducer