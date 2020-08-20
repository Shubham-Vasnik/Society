import societies from '../apis/societies';
import {FETCH_SOCIETIES, FETCH_SOCIETIES_ERROR} from './types';


export const fetchSocieties = () => async dispatch => {
    const response = await societies.get('/societies');
    if(response.data.status === "success"){
        dispatch({type:FETCH_SOCIETIES,payload:response.data.data});
    }
    else{
        dispatch({type:FETCH_SOCIETIES_ERROR,payload:"Fetch Failed"});
    }
}