import {FAQ_CONTENT_REQUEST,
    FAQ_CONTENT_SUCCESS,
    FAQ_CONTENT_FAIL,
    SINGLE_FAQ_REQUEST,
    SINGLE_FAQ_SUCCESS,
    SINGLE_FAQ_FAIL,
    UPDATE_FAQ_REQUEST,
    UPDATE_FAQ_SUCCESS,
    UPDATE_FAQ_FAIL,
    UPDATE_FAQ_RESET,
    CLEAR_ERRORS
} from '../constants/faqConstant'

// All FAQ Reducer - 
export const AllFaqReducer = (state={faqs:[]},action)=>{
switch (action.type) {
    case FAQ_CONTENT_REQUEST:
        return {
            loading: true,
            faqs:[]
        }
     case FAQ_CONTENT_SUCCESS:
        return {
            loading: false,
            faqs:action.payload.faqs
            }   
    case FAQ_CONTENT_FAIL:
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


// Single FAQ reducer
export const singleFaqReducer = (state = { faq: {} }, action) => {
switch (action.type) {
  case SINGLE_FAQ_REQUEST:
    return {
      loading: true,
      ...state,
    };
  case SINGLE_FAQ_SUCCESS:
    return {
      loading: false,
      faq: action.payload,
    };
  case SINGLE_FAQ_FAIL:
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

// Update FAQ Reducer
export const updateFaqReducer = (state={},action)=>{ 
switch (action.type) {
    case UPDATE_FAQ_REQUEST:
        return {
            ...state,
            loading:true
        }
    case UPDATE_FAQ_SUCCESS:
        return{
            ...state,
            loading:false,
            isUpdated: action.payload
        }    
    case UPDATE_FAQ_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload,
        }
    case UPDATE_FAQ_RESET:
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

