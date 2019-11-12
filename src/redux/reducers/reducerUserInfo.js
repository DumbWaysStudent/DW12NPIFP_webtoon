import * as types from '../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    detailUser: []
};

export default function reducerUserInfo(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_USERPROFILE}_PENDING`:
            return {
                ...state,
                isLoading: true
            };

        case `${types.GET_USERPROFILE}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                detailUser: action.payload.data
            };

        case `${types.GET_USERPROFILE}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
}