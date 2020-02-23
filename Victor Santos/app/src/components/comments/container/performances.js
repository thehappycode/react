import actions from './actions';
import {getApiPostComments} from './api';

const performances = dispatch => {

    const getPostComnents = async () => {
        try {
            // id = id ? id : "";
            // const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            // // .then(response => response.json())
            // // .then(json => console.log(json))
            // const posts = await response.json();
            // const result = id ? [posts] : posts;
            var result = await getApiPostComments();
            dispatch(actions.getPostComnents(result));
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getPostComnents
    }
}

export default performances