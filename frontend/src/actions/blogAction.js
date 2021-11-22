import axios from 'axios'

import {
    BLOG_CREATE_REQUEST,
    BLOG_CREATE_SUCCESS,
    BLOG_CREATE_FAIL,
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
      DELETE_BLOG_REQUEST,
      DELETE_BLOG_SUCCESS,
      DELETE_BLOG_RESET
  } from '../constants/blogConstant'

  // Create Blog
export const createBlog = (blogData) => async (dispatch) => {
    try {
      dispatch({ type: BLOG_CREATE_REQUEST });
  
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
  
      const { data } = await axios.post(
        `/api/v1/blog/new`,
        blogData,
        config
      );
  
      dispatch({
        type: BLOG_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BLOG_CREATE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  
  
  // Get All Blog
  export const getAllBlog = ()=>async(dispatch)=>{
      try {
          dispatch({type:BLOG_CONTENT_REQUEST})
  
          const {data} = await axios.get("/api/v1/blog")
          dispatch({
              type:BLOG_CONTENT_SUCCESS,
              payload: data
          })
      } catch (error) {
          dispatch({
              type: BLOG_CONTENT_FAIL,
              payload:error.response.data.message,
          })
      }
  }
  
  
    // Get Single Blog Details
    export const getSingleBlogDetails = (id) => async (dispatch) => {
      try {
        dispatch({ type: SINGLE_BLOG_REQUEST });
    
        const { data } = await axios.get(`/api/v1/blog/${id}`);
    
        dispatch({
          type: SINGLE_BLOG_SUCCESS,
          payload: data.blog,
        });
      } catch (error) {
        dispatch({
          type: SINGLE_BLOG_FAIL,
          payload: error.response.data.message,
        });
      }
    };
  
    
  // Update Blog
  export const updateBlog = (id, myFormData) => async (dispatch) => {
      try {
        dispatch({ type: UPDATE_BLOG_REQUEST});
    
        const config = { headers: { "Content-Type": "multipart/form-data" } };
    
        const { data } = await axios.put(`/api/v1/blog/${id}`, myFormData, config);
    
        dispatch({ type: UPDATE_BLOG_SUCCESS, payload: data.success });
      } catch (error) {
        dispatch({
          type: UPDATE_BLOG_FAIL,
          payload: error.response.data.message,
        });
      }
    };

    // Delete Blog
export const deleteBlog = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_BLOG_REQUEST });
  
      const { data } = await axios.delete(`/api/v1/blog/${id}`);
  
      dispatch({
        type: DELETE_BLOG_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BLOG_RESET,
        payload: error.response.data.message,
      });
    }
  };
  
  
   // Clearing Errors
   export const clearErrors = () => async (dispatch) => {
      dispatch({ type: CLEAR_ERRORS });
    };
  
  