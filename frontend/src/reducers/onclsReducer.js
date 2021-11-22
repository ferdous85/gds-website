import {ONCLS_CONTENT_REQUEST,     
    CLEAR_ERRORS,
    SINGLE_ONCLS_REQUEST,
    ONCLS_CONTENT_SUCCESS,
    SINGLE_ONCLS_SUCCESS,
    ONCLS_CONTENT_FAIL,
    SINGLE_ONCLS_FAIL,
    UPDATE_ONCLS_REQUEST,
    UPDATE_ONCLS_SUCCESS,
    UPDATE_ONCLS_FAIL,
    UPDATE_ONCLS_RESET, 
    } from '../constants/onclsConstant'

 
    //  Get All Online Class Reducer - 
  export const getAllOnClsReducer = (state={oncls:[]},action)=>{
    switch (action.type) {
        case ONCLS_CONTENT_REQUEST:
            return {
                loading: true,
                oncls:[]
            }
         case ONCLS_CONTENT_SUCCESS:
            return {
                loading: false,
                oncls:action.payload.oncls
                }   
        case ONCLS_CONTENT_FAIL:
            return {
                loading: false,
                error:action.payload
                 }
        case CLEAR_ERRORS:
            return {
                ...state,
                 error:null
                 }         
        default:
            return state
    }
}


export const onclsReducer = (state = { oncls: {} }, action) => {
    switch (action.type) {
      case SINGLE_ONCLS_REQUEST:
        return {
          loading: true,
          ...state,
        };
        case SINGLE_ONCLS_SUCCESS:
        return {
          loading: false,
          oncls: action.payload,
        };
        case SINGLE_ONCLS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };


  // Update single ONLINE CLASS Reducer
export const updateOnclsReducer = (state={},action)=>{ 
  switch (action.type) {
      case UPDATE_ONCLS_REQUEST:
          return {
              ...state,
              loading:true,
              isUpdated: false,
          }
      case UPDATE_ONCLS_SUCCESS:
          return{
              ...state,
              loading:false,
              isUpdated: action.payload
          }    
      case UPDATE_ONCLS_FAIL:
          return{
              ...state,
              loading: false,
              error: action.payload,
          }
      case UPDATE_ONCLS_RESET:
          return{
              ...state,
              isUpdated: false,
          }
      case CLEAR_ERRORS:
          return {
                ...state,
                error: null,
              };
      default:
          return state;
  }
}
