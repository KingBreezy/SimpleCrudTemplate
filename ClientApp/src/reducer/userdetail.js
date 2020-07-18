import {ACTION_TYPES} from '../actions/userdetail';

export const initialState ={
    userDetail:[]
}

export const userdetail = (state = initialState, action) =>{
    switch(action.type){
        case ACTION_TYPES.FETCH_ALL_USER:
            return{
                ...state,
                userDetail:[...action.payload]
            }
        case ACTION_TYPES.FETCH_USER_BY_ID:
            return{
                ...state,
                userDetail:[...action.payload]
            }
        case ACTION_TYPES.CREATE_USER:
            return{
                ...state,
                userDetail: [...state.userDetail, action.payload]
            }
        case ACTION_TYPES.UPDATE_USER:
            return{
                ...state,
                userDetail: state.userDetail.map(x => x.id === action.payload.id ? action.payload : x)
            }
        case ACTION_TYPES.DELETE_USER:
            return{
                ...state,
                userDetail: state.userDetail.filter(x => x.id !== action.payload)
            }
        default:
            return state;
    }
}