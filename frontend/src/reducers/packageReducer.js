import {PACKAGE_CONTENT_REQUEST,
        PACKAGE_CONTENT_SUCCESS,
        PACKAGE_CONTENT_FAIL,
        SINGLE_PACKAGE_REQUEST,
        SINGLE_PACKAGE_SUCCESS,
        SINGLE_PACKAGE_FAIL,
        UPDATE_PACKAGE_REQUEST,
        UPDATE_PACKAGE_SUCCESS,
        UPDATE_PACKAGE_FAIL,
        UPDATE_PACKAGE_RESET,
        CLEAR_ERRORS
} from '../constants/packageConstant'

// All Package Reducer - 
export const AllPackageReducer = (state={packages:[]},action)=>{
    switch (action.type) {
        case PACKAGE_CONTENT_REQUEST:
            return {
                loading: true,
                packages:[]
            }
         case PACKAGE_CONTENT_SUCCESS:
            return {
                loading: false,
                packages:action.payload.packages
                }   
        case PACKAGE_CONTENT_FAIL:
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

  
 // Single Package reducer
export const singlePackageReducer = (state = { content: {} }, action) => {
    switch (action.type) {
      case SINGLE_PACKAGE_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case SINGLE_PACKAGE_SUCCESS:
        return {
          loading: false,
          content: action.payload,
        };
      case SINGLE_PACKAGE_FAIL:
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

  // Update Hero Area Reducer
export const updatePackageReducer = (state={},action)=>{ 
    switch (action.type) {
        case UPDATE_PACKAGE_REQUEST:
            return {
                ...state,
                loading:true
            }
        case UPDATE_PACKAGE_SUCCESS:
            return{
                ...state,
                loading:false,
                isUpdated: action.payload
            }    
        case UPDATE_PACKAGE_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_PACKAGE_RESET:
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