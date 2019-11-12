import * as types from '../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    comics: [],
    favorites: []
};

export default function reducerComics(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_COMICS}_PENDING`:
            return {
                ...state,
                isLoading: true
            };

        case `${types.GET_COMICS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                comics: action.payload.data
            };

        case `${types.GET_COMICS}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case `${types.GET_FAVORITES}_PENDING`:
            return {
                ...state,
                isLoading: true
            };

        case `${types.GET_FAVORITES}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                favorites: action.payload.data
            };

        case `${types.GET_FAVORITES}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
}