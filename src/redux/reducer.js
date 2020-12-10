import * as ActionTypes from './ActionTypes';
import { HOTDOGS } from './hotdogs';

const reducer = (state = HOTDOGS, action) => {
    switch(action.type){
        case ActionTypes.ADD_HOTDOG:
            return state.concat([action.data]);
        case ActionTypes.DELETE_HOTDOG:
            return state.filter((hotdog) => hotdog.id !== action.id);
        case ActionTypes.EDIT_HOTDOG:
            return state.map((hotdog) => hotdog.id === action.id ? {...hotdog,editing:!hotdog.editing}:hotdog)
        case ActionTypes.UPDATE:
            return state.map((hotdog) => {
                if (hotdog.id === action.id) {
                    return {
                        ...hotdog,
                        name: action.data.newName,
                        title: action.data.newTitle,
                        description: action.data.newDescription,
                        image: action.data.newImage,
                        editing: !hotdog.editing
                    }
                }
                else return hotdog;
            })
    default:
        return state;
    }
}
export default reducer;