import * as types from "./ActionTypes"
const initialState = {
 
    isAuth: false,
    token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
   switch(action.type){
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
