import * as actions from '../api';
import axios from 'axios';

const api = ({ dispatch }) => next => async action => {
    console.log(action.type);
    if(action.type !== actions.apiCallBegan.type) return next(action);

    const {url, method, data, onStart, onSuccess, onError } = action.payload;

    if(onStart) dispatch({type: onStart});

    next(action);
    
    console.log(data);
    try {
        const response = await axios.request({
            baseURL: 'http://localhost:3000/',
            url,
            method,
            data
        });
        dispatch(actions.apiCallSuccess(response.data));

        if(onSuccess) dispatch({ type: onSuccess, payload: response.data});
    } catch (error) {
        dispatch(actions.apiCallFailed(error.message));

        if(onError) dispatch({type: onError, payload: error.message})
    }
}


export default api;