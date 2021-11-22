import { CLEAR_ERRORS, SINGLE_SIXIMG_FAIL, SINGLE_SIXIMG_REQUEST, SINGLE_SIXIMG_SUCCESS, SIXIMG_CONTENT_FAIL, SIXIMG_CONTENT_REQUEST, SIXIMG_CONTENT_SUCCESS, SIXIMG_CREATE_FAIL, SIXIMG_CREATE_REQUEST, SIXIMG_CREATE_RESET, SIXIMG_CREATE_SUCCESS, UPDATE_SIXIMG_FAIL, UPDATE_SIXIMG_REQUEST, UPDATE_SIXIMG_RESET, UPDATE_SIXIMG_SUCCESS } from '../constants/siximgConstant'


 // Create New Five Image
 export const createSixImgReducer = (state = { content: {} }, action) => {
    switch (action.type) {
      case SIXIMG_CREATE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case SIXIMG_CREATE_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          content: action.payload.content,
        };
      case SIXIMG_CREATE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case SIXIMG_CREATE_RESET:
        return {
          ...state,
          success: false,
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
  

   //  Get All Six Image Reducer - 
   export const getAllSixImgReducer = (state={sixContent:[]},action)=>{
    switch (action.type) {
        case SIXIMG_CONTENT_REQUEST:
            return {
                loading: true,
                sixContent:[]
            }
         case SIXIMG_CONTENT_SUCCESS:
            return {
                loading: false,
                sixContent:action.payload.sixContent
                }   
        case SIXIMG_CONTENT_FAIL:
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



// Single Six Image reducer
export const singleSixImgReducer = (state = { content: {} }, action) => {
    switch (action.type) {
      case SINGLE_SIXIMG_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case SINGLE_SIXIMG_SUCCESS:
        return {
          loading: false,
          content: action.payload,
        };
      case SINGLE_SIXIMG_FAIL:
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

  // Update SIX Image Reducer
  export const updateSixImgReducer = (state={},action)=>{ 
    switch (action.type) {
        case UPDATE_SIXIMG_REQUEST:
            return {
                ...state,
                loading:true
            }
        case UPDATE_SIXIMG_SUCCESS:
            return{
                ...state,
                loading:false,
                isUpdated: action.payload
            }    
        case UPDATE_SIXIMG_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_SIXIMG_RESET:
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


