import {types} from './actions'

const reducer = (state, action) => {
    switch (action.type){
        case types.setNewName:
            return {...state, name: action.payload}
        case types.getPostChilds:
            return {...state, datas: action.payload}    
        default:
            return state    
    }
}

export default reducer;