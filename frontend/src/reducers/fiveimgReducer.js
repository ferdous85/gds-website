import { CLEAR_ERRORS, 
    FIVEIMG_CONTENT_FAIL, 
    FIVEIMG_CONTENT_REQUEST, 
    FIVEIMG_CONTENT_SUCCESS, 
    FIVEIMG_CREATE_FAIL, 
    FIVEIMG_CREATE_REQUEST, 
    FIVEIMG_CREATE_RESET, 
    FIVEIMG_CREATE_SUCCESS, 
    SINGLE_FIVEIMG_FAIL, 
    SINGLE_FIVEIMG_REQUEST, 
    SINGLE_FIVEIMG_SUCCESS, 
    UPDATE_FIVEIMG_FAIL, 
    UPDATE_FIVEIMG_REQUEST, 
    UPDATE_FIVEIMG_RESET, 
    UPDATE_FIVEIMG_SUCCESS } from '../constants/fiveimgContant'


 // Create New Five Image
 export const createFiveImgReducer = (state = { content: {} }, action) => {
    switch (action.type) {
      case FIVEIMG_CREATE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FIVEIMG_CREATE_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          content: action.payload.content,
        };
      case FIVEIMG_CREATE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case FIVEIMG_CREATE_RESET:
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
  

   //  Get All Five Image Reducer - 
   export const getAllFiveImgReducer = (state={imgContent:[]},action)=>{
    switch (action.type) {
        case FIVEIMG_CONTENT_REQUEST:
            return {
                loading: true,
                imgContent:[]
            }
         case FIVEIMG_CONTENT_SUCCESS:
            return {
                loading: false,
                imgContent:action.payload.imgContent
                }   
        case FIVEIMG_CONTENT_FAIL:
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



// Single Five Image reducer
export const singleFiveImgReducer = (state = { content: {} }, action) => {
    switch (action.type) {
      case SINGLE_FIVEIMG_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case SINGLE_FIVEIMG_SUCCESS:
        return {
          loading: false,
          content: action.payload,
        };
      case SINGLE_FIVEIMG_FAIL:
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

  // Update Five Image Reducer
  export const updateFiveImgReducer = (state={},action)=>{ 
    switch (action.type) {
        case UPDATE_FIVEIMG_REQUEST:
            return {
                ...state,
                loading:true
            }
        case UPDATE_FIVEIMG_SUCCESS:
            return{
                ...state,
                loading:false,
                isUpdated: action.payload
            }    
        case UPDATE_FIVEIMG_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_FIVEIMG_RESET:
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


