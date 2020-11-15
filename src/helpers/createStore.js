import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from '../client/reducers'
import webConfig from '../../webConfig.json'

export default (req) => {
    let initialState = {}
    if (typeof window !== 'undefined') {
        initialState = window?.INITIAL_STATE
    }
    const axiosInstance = axios.create({
        baseURL: webConfig.axiosInstance_baseURL,
        headers: {
            cookie: req.get('cookie') || ''
        }
    })
    
    const store = createStore(
        reducers,
        initialState, 
        applyMiddleware(thunk.withExtraArgument(axiosInstance)
    ))
    return store
}