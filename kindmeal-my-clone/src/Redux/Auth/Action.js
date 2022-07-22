import * as types from "./ActionTypes"
import axios from "axios"

export const Register=(payload)=>(dispatch)=>{
    dispatch({type:types.REGISTER_REQUEST});
   return axios.post("https://reqres.in/api/register",payload)
     .then((r)=>{
        dispatch({type:types.REGISTER_SUCCESS,payload:r.data})
        return types.REGISTER_SUCCESS
     }).catch((e)=>{
        dispatch({type:types.REGISTER_FAILURE,payload:e})
     })

}


export const login=(params)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios.post("https://reqres.in/api/login",params)
    .then((r)=>{
        dispatch({type:types.LOGIN_SUCCESS,payload:r.data.token})
        return types.LOGIN_SUCCESS
    }).catch((e)=>{
        dispatch({type:types.LOGIN_FAILURE,payload:e})
    })
}