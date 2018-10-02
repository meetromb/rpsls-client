import {
    ENABLE_POPUP,
    DISABLE_POPUP
} from '../types';

export const enablePopup = (popupID) => {
    if (popupID) {
        return {
            type: ENABLE_POPUP,
            payload: {
                isPopupEnabled: true,
                popupID
            }
        }
    }
}

export const disablePopup = () => {
    return {
        type: DISABLE_POPUP,
        payload: {
            isPopupEnabled: false,
            popupID: null
        }
    }
}