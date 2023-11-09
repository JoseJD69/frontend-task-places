import {ActionType} from "../action-types";

interface AppState {
    places: [];
    loading: boolean;
}

const initialState: AppState = {
    places: [],
    loading: false,
};
export type AppAction = {
    type: ActionType;
    payload?: any;
}
const reducer = (state: AppState = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case ActionType.SEARCH_PLACES:
            return {...state, loading: true, places: action.payload};
        case ActionType.SET_LOADING:
            return {...state, loading: action.payload};

        default:
            return state;
    }
}

export default reducer;