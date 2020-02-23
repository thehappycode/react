export const types = {
    setNewName: "SET_NEW_NAME",
    clearName: "CLEAR_NAME",
    addName: "ADD_NAME",
    getPostChilds: "GET_POST_CHILDS"
}

const actions =  {
    changeNameAction: payload => ({
        type: types.setNewName,
        payload
    }),
    getPostChilds: payload => ({
        type: types.getPostChilds,
        payload
    })
}

export default actions
