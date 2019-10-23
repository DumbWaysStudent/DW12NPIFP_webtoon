import * as types from '../types'
import axios from 'axios'
import { API_TOON } from '../../component/server'

export const handleGetComics = () => ({
    type: types.GET_COMICS,
    payload: axios.get(`${API_TOON}/api/v1/comics`)
});

export const handleGetDetailComics = (id) => ({
    type: types.GET_DETAILCOMICS,
    payload: axios.get(`${API_TOON}/api/v1/comic/${id}/episodes`)
});