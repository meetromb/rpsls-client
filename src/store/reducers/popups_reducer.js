import {
    ENABLE_POPUP,
    DISABLE_POPUP
} from '../types';

const initialState = {
    isPopupEnabled: false,
    popupID: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ENABLE_POPUP:
            return state = action.payload
        case DISABLE_POPUP:
            return state = action.payload
        default:
            return state;
    }
}
