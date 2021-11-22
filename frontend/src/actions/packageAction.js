import axios from 'axios'

import {PACKAGE_CONTENT_REQUEST,
    PACKAGE_CONTENT_SUCCESS,
    PACKAGE_CONTENT_FAIL,
    SINGLE_PACKAGE_REQUEST,
    SINGLE_PACKAGE_SUCCESS,
    SINGLE_PACKAGE_FAIL,
    UPDATE_PACKAGE_REQUEST,
    UPDATE_PACKAGE_SUCCESS,
    UPDATE_PACKAGE_FAIL,
    CLEAR_ERRORS
} from '../constants/packageConstant'


  // Get All Package Content
  export const getPackage = ()=>async(dispatch)=>{
    try {
        dispatch({type: PACKAGE_CONTENT_REQUEST})
  
        const {data} = await axios.get("/api/v1/package")
        dispatch({
            type:PACKAGE_CONTENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PACKAGE_CONTENT_FAIL,
            payload:error.response.data.message,
        })
    }
  }

// Get Single Price content Details
export const getSinglePackageDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_PACKAGE_REQUEST });
  
      const { data } = await axios.get(`/api/v1/package/${id}`);
  
      dispatch({
        type: SINGLE_PACKAGE_SUCCESS,
        payload: data.content,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_PACKAGE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Update Hero Pricing Content
export const updatePackage = (id, myFormData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PACKAGE_REQUEST});
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.put(`/api/v1/package/${id}`, myFormData, config);
  
      dispatch({ type: UPDATE_PACKAGE_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_PACKAGE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  
    // Clearing Errors
    export const clearErrors = () => async (dispatch) => {
      dispatch({ type: CLEAR_ERRORS });
    };
  