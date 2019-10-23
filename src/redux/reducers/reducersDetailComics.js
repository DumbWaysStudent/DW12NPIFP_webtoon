import * as types from '../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    detailComics: []
};

export default function reducerDetailComics(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_DETAILCOMICS}_PENDING`:
            return {
                ...state,
                isLoading: true
            };

        case `${types.GET_DETAILCOMICS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                detailComics: action.payload.data
            };

        case `${types.GET_DETAILCOMICS}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
}