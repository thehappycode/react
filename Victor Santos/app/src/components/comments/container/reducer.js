import {types} from './actions'

const reducer = (state, action) => {
    switch (action.type){
        case types.getPostComments:
            return {...state, datas: action.payload}    
        default:
            return state    
    }
}

export default reducer;