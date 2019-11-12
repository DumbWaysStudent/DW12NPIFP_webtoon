import * as types from '../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    myWebtoons: []
};

export default function reducersGetMyWebtoons(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_MYWEBTOONS}_PENDING`:
            return {
                ...state,
                isLoading: true
            };

        case `${types.GET_MYWEBTOONS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                myWebtoons: action.payload.data,
            };

        case `${types.GET_MYWEBTOONS}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
}