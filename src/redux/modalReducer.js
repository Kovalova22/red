import * as ActionTypes from './ActionTypes';
import { initialState } from './modalState';

const Modal = (state = initialState, action) => {
    switch (action.type){
        case ActionTypes.SHOW_MODAL:
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                type: action.type
            }
        case ActionTypes.HIDE_MODAL:
            return initialState
        default: 
        return state
    }
}
export default Modal;
