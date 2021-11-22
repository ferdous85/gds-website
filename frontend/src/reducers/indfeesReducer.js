import {INDFEES_CONTENT_REQUEST,
    INDFEES_CONTENT_SUCCESS,
    INDFEES_CONTENT_FAIL,
    SINGLE_INDFEES_REQUEST,
    SINGLE_INDFEES_SUCCESS,
    SINGLE_INDFEES_FAIL,
    UPDATE_INDFEES_REQUEST,
    UPDATE_INDFEES_SUCCESS,
    UPDATE_INDFEES_FAIL,
    UPDATE_INDFEES_RESET,
    QUICKTEST_CONTENT_REQUEST,
    QUICKTEST_CONTENT_SUCCESS,
    QUICKTEST_CONTENT_FAIL,
    SINGLE_QUICKTEST_REQUEST,
    SINGLE_QUICKTEST_SUCCESS,
    SINGLE_QUICKTEST_FAIL,
    UPDATE_QUICKTEST_REQUEST,
    UPDATE_QUICKTEST_SUCCESS,
    UPDATE_QUICKTEST_FAIL,
    UPDATE_QUICKTEST_RESET,
    CLEAR_ERRORS
} from '../constants/indFeesConstant'

// All Individual Fees Reducer - 
export const AllIndfeesReducer = (state={fees:[]},action)=>{
switch (action.type) {
    case INDFEES_CONTENT_REQUEST:
        return {
            loading: true,
            fees:[]
        }
     case INDFEES_CONTENT_SUCCESS:
        return {
            loading: false,
            fees:action.payload.fees
            }   
    case INDFEES_CONTENT_FAIL:
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


// Single Individual Fees reducer
export const singleIndFeesReducer = (state = { fee: {} }, action) => {
switch (action.type) {
  case SINGLE_INDFEES_REQUEST:
    return {
      loading: true,
      ...state,
    };
  case SINGLE_INDFEES_SUCCESS:
    return {
      loading: false,
      fee: action.payload,
    };
  case SINGLE_INDFEES_FAIL:
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

// Update Individual Fees Reducer
export const updateIndFeesReducer = (state={},action)=>{ 
switch (action.type) {
    case UPDATE_INDFEES_REQUEST:
        return {
            ...state,
            loading:true
        }
    case UPDATE_INDFEES_SUCCESS:
        return{
            ...state,
            loading:false,
            isUpdated: action.payload
        }    
    case UPDATE_INDFEES_FAIL:
        return{
            ...state,
            loading: false,
            error: action.payload,
        }
    case UPDATE_INDFEES_RESET:
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


// All Quick Road Test Fees Reducer - 
export const AllQuickTestReducer = (state={qfees:[]},action)=>{
  switch (action.type) {
      case QUICKTEST_CONTENT_REQUEST:
          return {
              loading: true,
              qfees:[]
          }
       case QUICKTEST_CONTENT_SUCCESS:
          return {
              loading: false,
              qfees:action.payload.qfees
              }   
      case QUICKTEST_CONTENT_FAIL:
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
  
  
  // Single Quick Road Test reducer
  export const singleQuickTestReducer = (state = { qfee: {} }, action) => {
  switch (action.type) {
    case SINGLE_QUICKTEST_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case SINGLE_QUICKTEST_SUCCESS:
      return {
        loading: false,
        qfee: action.payload,
      };
    case SINGLE_QUICKTEST_FAIL:
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
  
  // Update Quick Road Test Reducer
  export const updateQuickTestReducer = (state={},action)=>{ 
  switch (action.type) {
      case UPDATE_QUICKTEST_REQUEST:
          return {
              ...state,
              loading:true
          }
      case UPDATE_QUICKTEST_SUCCESS:
          return{
              ...state,
              loading:false,
              isUpdated: action.payload
          }    
      case UPDATE_QUICKTEST_FAIL:
          return{
              ...state,
              loading: false,
              error: action.payload,
          }
      case UPDATE_QUICKTEST_RESET:
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
  
  
