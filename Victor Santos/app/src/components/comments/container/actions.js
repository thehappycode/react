export const types = {
    commentRequest: "COMMENT_REQUEST",
    commentSuccess: "COMMENT_SUCCESS",
    commentFalll: "COMMENT_FALL",
    getPostComments: "GET_POST_COMMENTS"
}

const actions =  {
    getPostComnents: payload => ({
        type: types.getPostComments,
        payload
    })
}

export default actions;
