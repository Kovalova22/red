import * as ActionTypes from './ActionTypes';

export const addHotdog = (hotdogId, name, title, description, image) => ({
    type: ActionTypes.ADD_HOTDOG,
    payload: {
        hotdogId: hotdogId,
        name: name,
        title: title,
        description: description,
        image: image
    }
});

export const editHotdog = () => ({
    type: ActionTypes.EDIT_HOTDOG,
    payload: {}
});

export const deleteHotdog = (hotdogId) => ({
    type: ActionTypes.DELETE_HOTDOG,
    payload: {
        hotdogId: hotdogId
    }
});