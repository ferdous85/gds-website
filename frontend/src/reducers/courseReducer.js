import {
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAIL,
  CREATE_COURSE_RESET,
  COURSE_CONTENT_REQUEST, 
    COURSE_CONTENT_SUCCESS, 
    COURSE_CONTENT_FAIL,
    SINGLE_COURSE_CONTENT_REQUEST,
    SINGLE_COURSE_CONTENT_SUCCESS,
    SINGLE_COURSE_CONTENT_FAIL,
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_FAIL,
    UPDATE_COURSE_RESET,
    CLEAR_ERRORS
} from '../constants/courseConstant'

// Create New Course
export const createCourseReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case CREATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COURSE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        course: action.payload.course,
      };
    case CREATE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_COURSE_RESET:
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

//  Course Reducer - 
export const courseReducer = (state={courses:[]},action)=>{
    switch (action.type) {
        case COURSE_CONTENT_REQUEST:
            return {
                loading: true,
                courses:[]
            }
         case COURSE_CONTENT_SUCCESS:
            return {
                loading: false,
                courses:action.payload.courses
                }   
        case COURSE_CONTENT_FAIL:
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

// Single Course reducer
export const singleCourseDetailsReducer = (state = { course: {} }, action) => {
    switch (action.type) {
      case SINGLE_COURSE_CONTENT_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case SINGLE_COURSE_CONTENT_SUCCESS:
        return {
          loading: false,
          course: action.payload,
        };
      case SINGLE_COURSE_CONTENT_FAIL:
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
export const updateCourseReducer = (state={},action)=>{ 
    switch (action.type) {
        case UPDATE_COURSE_REQUEST:
            return {
                ...state,
                loading:true
            }
        case UPDATE_COURSE_SUCCESS:
            return{
                ...state,
                loading:false,
                isUpdated: action.payload
            }    
        case UPDATE_COURSE_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_COURSE_RESET:
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
