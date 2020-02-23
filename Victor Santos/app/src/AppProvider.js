import React, { useReducer } from 'react';
import MainContext from './MainContext';
import ChildReducer from './components/child/container/reducer';
import CommentsReducer from './components/comments/container/reducer';
import ChildPerformances from './components/child/container/performances';
import CommentPerformances from './components/comments/container/performances';
import combineReducer from './components/utils/combineReducer';

const AppProvider = props => {
    const initialValue = {
        child: {
            name: "victor",
            datas: [],
        },
        comments: {
            datas: []
        }
    };

    const rootReducer = combineReducer({ child: ChildReducer, comments: CommentsReducer });

    const [state, dispatch] = useReducer(rootReducer, initialValue);

    const myInitialState = {
        ...state,
        child: {
            ...state.child,
            ...ChildPerformances(dispatch),
        },
        comments: {
            ...state.comments,
            ...CommentPerformances(dispatch)
        }
    };

    return (
        <MainContext.Provider displayName="Main Context" value={myInitialState}>
            {props.children}
        </MainContext.Provider>
    )
}

export default AppProvider;
