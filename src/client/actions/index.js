
const FETCH_POST_START = 'FETCH_POST_START'
const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
const FETCH_POST_FAIL = 'FETCH_POST_FAIL'

export const fetchPosts = (query) => async (dispatch, getState, api) => {
    dispatch({
        type: FETCH_POST_START
    })
    await api.get(query).then(response => {
        dispatch({
            type: FETCH_POST_SUCCESS,
            payload: response.data
        })
    }).catch((err) => {
        dispatch({
            type: FETCH_POST_FAIL,
            error: err
        })
    })
    
};


export const actions = {
    FETCH_POST_START,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAIL
}