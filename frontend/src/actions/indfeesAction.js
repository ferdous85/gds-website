import axios from 'axios'

import {INDFEES_CONTENT_REQUEST,
    INDFEES_CONTENT_SUCCESS,
    INDFEES_CONTENT_FAIL,
    SINGLE_INDFEES_REQUEST,
    SINGLE_INDFEES_SUCCESS,
    SINGLE_INDFEES_FAIL,
    UPDATE_INDFEES_REQUEST,
    UPDATE_INDFEES_SUCCESS,
    UPDATE_INDFEES_FAIL,
    QUICKTEST_CONTENT_REQUEST,
    QUICKTEST_CONTENT_SUCCESS,
    QUICKTEST_CONTENT_FAIL,
    SINGLE_QUICKTEST_REQUEST,
    SINGLE_QUICKTEST_SUCCESS,
    SINGLE_QUICKTEST_FAIL,
    UPDATE_QUICKTEST_REQUEST,
    UPDATE_QUICKTEST_SUCCESS,
    UPDATE_QUICKTEST_FAIL,
    CLEAR_ERRORS
} from '../constants/indFeesConstant'


  // Get All Quick Test fee
  export const getQuickTestFees = ()=>async(dispatch)=>{
    try {
        dispatch({type: QUICKTEST_CONTENT_REQUEST})
  
        const {data} = await axios.get("/api/v1/quicktest")
        dispatch({
            type: QUICKTEST_CONTENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: QUICKTEST_CONTENT_FAIL,
            payload:error.response.data.message,
        })
    }
  }

// Get Single Quick Test fee Details
export const getSingleQuickTestDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_QUICKTEST_REQUEST });
  
      const { data } = await axios.get(`/api/v1/quicktest/${id}`);
  
      dispatch({
        type: SINGLE_QUICKTEST_SUCCESS,
        payload: data.qfee,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_QUICKTEST_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Update Quick Test fee
export const updateSingleQuickTest = (id, myFormData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_QUICKTEST_REQUEST});
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.put(`/api/v1/indfees/${id}`, myFormData, config);
  
      dispatch({ type: UPDATE_QUICKTEST_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_QUICKTEST_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  

  // Get All Indvidual Fees
  export const getIndFees = ()=>async(dispatch)=>{
    try {
        dispatch({type: INDFEES_CONTENT_REQUEST})
  
        const {data} = await axios.get("/api/v1/indfees")
        dispatch({
            type:INDFEES_CONTENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: INDFEES_CONTENT_FAIL,
            payload:error.response.data.message,
        })
    }
  }

// Get Single Indvidual Fees Details
export const getIndFeesDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_INDFEES_REQUEST });
  
      const { data } = await axios.get(`/api/v1/indfees/${id}`);
  
      dispatch({
        type: SINGLE_INDFEES_SUCCESS,
        payload: data.fee,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_INDFEES_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Update Individual Fees
export const updateSingleIndFees = (id, myFormData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_INDFEES_REQUEST});
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.put(`/api/v1/indfees/${id}`, myFormData, config);
  
      dispatch({ type: UPDATE_INDFEES_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_INDFEES_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  
    // Clearing Errors
    export const clearErrors = () => async (dispatch) => {
      dispatch({ type: CLEAR_ERRORS });
    };
  