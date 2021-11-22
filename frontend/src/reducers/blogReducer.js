import {
    BLOG_CREATE_REQUEST,
    BLOG_CREATE_SUCCESS,
    BLOG_CREATE_FAIL,
    BLOG_CREATE_RESET,
    BLOG_CONTENT_REQUEST,
    BLOG_CONTENT_SUCCESS,
    BLOG_CONTENT_FAIL,
    SINGLE_BLOG_REQUEST, 
    SINGLE_BLOG_SUCCESS, 
    SINGLE_BLOG_FAIL,
      CLEAR_ERRORS,
      UPDATE_BLOG_SUCCESS,
      UPDATE_BLOG_REQUEST,
      UPDATE_BLOG_FAIL,
      UPDATE_BLOG_RESET,
      DELETE_BLOG_REQUEST,
      DELETE_BLOG_SUCCESS,
      DELETE_BLOG_FAIL,
      DELETE_BLOG_RESET
  } from '../constants/blogConstant'
  
  // Create New BLOG
  export const createBlogReducer = (state = { blog: {} }, action) => {
    switch (action.type) {
      case BLOG_CREATE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case BLOG_CREATE_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          blog: action.payload.blog,
        };
      case BLOG_CREATE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case BLOG_CREATE_RESET:
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
  
  //  BLOG Reducer - 
  export const getBlogReducer = (state={blogs:[]},action)=>{
      switch (action.type) {
          case BLOG_CONTENT_REQUEST:
              return {
                  loading: true,
                  blogs:[]
              }
           case BLOG_CONTENT_SUCCESS:
              return {
                  loading: false,
                  blogs:action.payload.blogs
                  }   
          case BLOG_CONTENT_FAIL:
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
  
  // Single Blog reducer
  export const singleBlogDetailsReducer = (state = { blog: {} }, action) => {
      switch (action.type) {
        case SINGLE_BLOG_REQUEST:
          return {
            loading: true,
            ...state,
          };
        case SINGLE_BLOG_SUCCESS:
          return {
            loading: false,
            blog: action.payload,
          };
        case SINGLE_BLOG_FAIL:
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
  
    // Update single Blog Reducer
  export const updateBlogReducer = (state={},action)=>{ 
      switch (action.type) {
          case UPDATE_BLOG_REQUEST:
              return {
                  ...state,
                  loading:true
              }
          case UPDATE_BLOG_SUCCESS:
              return{
                  ...state,
                  loading:false,
                  isUpdated: action.payload
              }    
          case UPDATE_BLOG_FAIL:
              return{
                  ...state,
                  loading: false,
                  error: action.payload,
              }
          case UPDATE_BLOG_RESET:
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

  // Delete single Blog Reducer
  export const deleteBlogReducer = (state={},action)=>{ 
    switch (action.type) {
        case DELETE_BLOG_REQUEST:
            return {
                ...state,
                loading:true
            }
        case DELETE_BLOG_SUCCESS:
            return{
                ...state,
                loading:false,
                isDeleted: action.payload
            }    
        case DELETE_BLOG_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case DELETE_BLOG_RESET:
            return{
                ...state,
                isDeleted: false,
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
  