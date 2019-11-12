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

export const handleGetDetailEpisodes = (id_episode) => ({
    type: types.GET_DETAILEPISODES,
    payload: axios.get(`${API_TOON}/api/v1/comic/1/episode/${id_episode}`)
});

export const handleGetFavorites = (idUser, token) => ({
    type: types.GET_FAVORITES,
    payload: axios.get(`${API_TOON}/api/v1/favorite/user/${idUser}`, {
        headers: { "Authorization": `Bearer ${token}` }
    })
});