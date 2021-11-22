import { CLEAR_ERRORS, CONTACT_CONTENT_FAIL, CONTACT_CONTENT_REQUEST, CONTACT_CONTENT_SUCCESS, UPDATE_CONTACT_FAIL, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_RESET, UPDATE_CONTACT_SUCCESS } from '../constants/contactConstant'

// All Contact Reducer - 
export const AllContactReducer = (state = { content: {} }, action) => {
    switch (action.type) {
      case CONTACT_CONTENT_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case CONTACT_CONTENT_SUCCESS:
        return {
          loading: false,
          content: action.payload,
        };
      case CONTACT_CONTENT_FAIL:
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


  // Update Contact Reducer
  export const updateContactReducer = (state={},action)=>{ 
    switch (action.type) {
        case UPDATE_CONTACT_REQUEST:
            return {
                ...state,
                loading:true,
                isUpdated: false,
            }
        case UPDATE_CONTACT_SUCCESS:
            return{
                ...state,
                loading:false,
                isUpdated: action.payload
            }    
        case UPDATE_CONTACT_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_CONTACT_RESET:
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
  