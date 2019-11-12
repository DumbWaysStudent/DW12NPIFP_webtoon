import * as types from '../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    detailEpisodes: []
};

export default function reducerDetailEpisodes(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_DETAILEPISODES}_PENDING`:
            return {
                ...state,
                isLoading: true
            };

        case `${types.GET_DETAILEPISODES}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                detailEpisodes: action.payload.data
            };

        case `${types.GET_DETAILEPISODES}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
}