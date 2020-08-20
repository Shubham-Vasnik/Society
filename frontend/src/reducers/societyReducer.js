import _ from 'lodash';

import {
    FETCH_SOCIETIES, FETCH_SOCIETIES_ERROR,
} from '../actions/types';

export default (state={}, action) => {
    switch(action.type){
        case FETCH_SOCIETIES:
            return {...state, ..._.mapKeys(action.payload,'society_id')};
        case FETCH_SOCIETIES_ERROR:
            return {...state, error:action.payload}
        default:
            return state;
    }
}