import {ActionType} from "../action-types";
import {PlaceDetail, Prediction} from "../../api/GoogleAPI"

interface AppState {
    places: Prediction[];
    placeDetail: PlaceDetail;
    zipCodes: string[];
    loading: boolean;
}

const initialState: AppState = {
    places: [],
    placeDetail: {
        address_components: []
    },
    zipCodes: [],
    loading: false,
};
export type AppAction = {
    type: ActionType;
    payload?: any;
}
const reducer = (state: AppState = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case ActionType.SEARCH_PLACES:
            return {...state, loading: true, places: action.payload.predictions};
        case ActionType.GET_PLACE_DETAIL:
            return {...state, loading: true, placeDetail: action.payload.result};
        case ActionType.SEARCH_ZIP_CODES:
            return {...state, loading: true, zipCodes: action.payload};
        case ActionType.SET_LOADING:
            return {...state, loading: action.payload};
        default:
            return state;
    }
}

export default reducer;