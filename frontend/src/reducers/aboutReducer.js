import {ABOUT_CONTENT_REQUEST, ABOUT_CONTENT_SUCCESS, ABOUT_CONTENT_FAIL, CLEAR_ERRORS, SINGLE_ABOUT_CONTENT_REQUEST, SINGLE_ABOUT_CONTENT_SUCCESS, SINGLE_ABOUT_CONTENT_FAIL, UPDATE_ABOUT_REQUEST, UPDATE_ABOUT_SUCCESS, UPDATE_ABOUT_FAIL, UPDATE_ABOUT_RESET} from '../constants/aboutConstant'

export const aboutContentReducer = (state = { content: {} }, action) => {
    switch (action.type) {
      case ABOUT_CONTENT_REQUEST:
      case SINGLE_ABOUT_CONTENT_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case ABOUT_CONTENT_SUCCESS:
        case SINGLE_ABOUT_CONTENT_SUCCESS:
        return {
          loading: false,
          content: action.payload,
        };
      case ABOUT_CONTENT_FAIL:
        case SINGLE_ABOUT_CONTENT_FAIL:
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

  export const singleAboutReducer = (state = { content: {} }, action) => {
    switch (action.type) {
      case SINGLE_ABOUT_CONTENT_REQUEST:
        return {
          loading: true,
          ...state,
        };
        case SINGLE_ABOUT_CONTENT_SUCCESS:
        return {
          loading: false,
          content: action.payload,
        };
        case SINGLE_ABOUT_CONTENT_FAIL:
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



  // Update single Hero Area Reducer
export const updateAboutHeroReducer = (state={},action)=>{ 
  switch (action.type) {
      case UPDATE_ABOUT_REQUEST:
          return {
              ...state,
              loading:true,
              isUpdated: false,
          }
      case UPDATE_ABOUT_SUCCESS:
          return{
              ...state,
              loading:false,
              isUpdated: action.payload
          }    
      case UPDATE_ABOUT_FAIL:
          return{
              ...state,
              loading: false,
              error: action.payload,
          }
      case UPDATE_ABOUT_RESET:
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
