import actions from './actions';
import {getApiPostChilds} from './api';

const performances = dispatch => {
    const onChangeName = name => {
        dispatch(actions.changeNameAction(name));
    }

    const getPostChilds = async (id) => {
        try {
            var result = await getApiPostChilds(id);
            dispatch(actions.getPostChilds(result));
        } catch (error) {
            console.log(error);
        }
    }

    return {
        onChangeName,
        getPostChilds
    }
}

export default performances