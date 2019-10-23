//combine all reducer
import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigation from './../../RootNavigation'
import reducerComics from './reducerComics';
import reducerDetailComics from './reducersDetailComics';

const reducerRouter = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
    router: reducerRouter,
    comics: reducerComics,
    detailComics: reducerDetailComics,
})

export default appReducer