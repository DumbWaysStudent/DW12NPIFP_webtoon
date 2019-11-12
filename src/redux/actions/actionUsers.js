import * as types from '../types'
import axios from 'axios'
import { API_TOON } from '../../component/server'

export const handleGetUser = (idUser, token) => ({
    type: types.GET_USERPROFILE,
    payload: axios.get(`${API_TOON}/api/v1/user/${idUser}`, {
        headers: { "Authorization": `Bearer ${token}` }
    })
});