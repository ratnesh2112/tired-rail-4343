import * as types from "./ActionTypes"
const initialState = {
 
    isAuth: false,
    token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
   switch(action.type){
        case types.LOGIN_REQUEST:
            return{
                ...state,
                Loading:true,
                Error:false
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                Loading:false,
                isAuth:true,
                Token:action.payload,
                Error:false
            }
        case types.LOGIN_FAILURE:
            return{
                ...state,
                Loading:false,
                Error:true
            }
         case types.REGISTER_REQUEST:
            return{
                ...state,
                Loading:true,
                Error:false
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                Loading:false,
                
                Error:false
            }
        case types.REGISTER_FAILURE:
            return{
                ...state,
                Loading:false,
                Error:true
            }
        default:
            return state
        }
 
};
