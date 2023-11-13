import {Dispatch} from "react";
import {ActionType} from "../action-types";

export const searchPlaces = (place: any) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch({
            type: ActionType.SEARCH_PLACES,
            payload: place
        });
    }
}
export const obtainPlaceDetail = (placeDetail: any) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch({
            type: ActionType.GET_PLACE_DETAIL,
            payload: placeDetail
        });
    }
}
export const getZipCodes = (codes: any) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch({
            type: ActionType.SEARCH_ZIP_CODES,
            payload: codes
        });
    }
}

