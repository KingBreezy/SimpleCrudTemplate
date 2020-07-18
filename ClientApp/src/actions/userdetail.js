import api from './api';

export const ACTION_TYPES={
    FETCH_ALL_USER:"FETCH_ALL_USER",
    FETCH_USER_BY_ID:"FETCH_USER_BY_ID",
    CREATE_USER:"CREATE_USER",
    UPDATE_USER:"UPDATE_USER",
    DELETE_USER: 'DELETE_USER' 
}

export const fetchAll = () => dispatch =>{
    api.userDetail().fetchAll()
    .then(response =>{
        dispatch({
            type:ACTION_TYPES.FETCH_ALL_USER,
            payload:response.data
        })
    }).catch(err =>console.log(err))
}
export const fetchAllById = (id) => dispatch =>{
    api.userDetail().fetchAllById(id)
    .then(response =>{
        dispatch({
            type:ACTION_TYPES.FETCH_USER_BY_ID,
            payload:response.data
        })
    }).catch(err =>console.log(err))
}
export const updateUserDetails = (id, record, OnSuccess) => dispatch =>{
    api.userDetail().updateUserDetails(id,record)
    .then(response =>{
        dispatch({
            type: ACTION_TYPES.UPDATE_USER,
            payload: response.data
        })
        OnSuccess()
    })
    .catch(err => console.log(err))
}
export const deleteUserDetails =(id, OnSuccess) => dispatch =>{
    api.userDetail().deleteUserDetails(id)
    .then(response =>{
        dispatch({
            type: ACTION_TYPES.DELETE_USER,
            payload: response.data
        })
        OnSuccess()
    }).catch(err=> console.log(err))
}

export const createUserDetails = (record, OnSuccess) => dispatch =>{
    api.userDetail().createUserDetails(record)
    .then(response =>{
        dispatch({
            type: ACTION_TYPES.CREATE_USER,
            payload: response.data
        })
        OnSuccess()
    }).catch(err => console.log(err))
}