//combine all reducer
import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigation from './../../RootNavigation'
import reducerComics from './reducerComics';
import reducerDetailComics from './reducersDetailComics';
import reducerDetailEpisodes from './reducerDetailEpisodes';
import reducerUserInfo from './reducerUserInfo';
import reducersGetMyWebtoons from './reducersGetMyWebtoons';

const reducerRouter = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
    router: reducerRouter,
    comics: reducerComics,
    detailComics: reducerDetailComics,
    detailEpisodes: reducerDetailEpisodes,
    detailUser: reducerUserInfo,
    getMyWebtoons: reducersGetMyWebtoons,
})

export default appReducer