import * as types from '../types'
import axios from 'axios'
import { API_TOON } from '../../component/server'

export const handleGetMyWebtoons = (id, token) => ({
    type: types.GET_MYWEBTOONS,
    payload: axios.get(`${API_TOON}/api/v1/user/${id}/comics`, {
        headers: { "Authorization": `Bearer ${token}` }
    })
});