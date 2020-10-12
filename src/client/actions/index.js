export const fetchPost = (postID) => async (dispatch, getState, api) => {

    const _query = {
        query: `{
            Blog(slug: "${postID}"){
                postTitle
                post
                imageURL
            }
        }`
    };

    await api.post('', _query).then(response => {
        dispatch({
            type: 'FETCH_POST',
            payload: response.data
        })
    }).catch((err) => {
        console.log('error', err);
    })
    
};
