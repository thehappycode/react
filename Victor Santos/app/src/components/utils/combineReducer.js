// const STORE = {
//     child: {
//         name: "",
//         onChangeName: () => {}
//     },
//     comment: {
//         comments: [],
//         getCommnets: () => {}
//     }
// }

const combineReducer = reducers => {
    const reducerKeys = Object.keys(reducers);
    return function combination(state = {}, action) {
        let nextState = state;

        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            const reducer = reducers[key];
            const previousStateForKey = state[key];
            const nextStatesForKey = reducer(previousStateForKey, action);
            nextState = { ...nextState, [key]: nextStatesForKey };
        }
        return nextState;
    }

}

export default combineReducer;