import {Dispatch} from "react";

export const searchPlaces = (place:string) => {
    return async (dispatch:Dispatch<any>) => {
        dispatch({
            type: 'SEARCH_PLACES',
            payload: place
        });
    }
}