import axios from 'axios'

import {FAQ_CONTENT_REQUEST,
    FAQ_CONTENT_SUCCESS,
    FAQ_CONTENT_FAIL,
    SINGLE_FAQ_REQUEST,
    SINGLE_FAQ_SUCCESS,
    SINGLE_FAQ_FAIL,
    UPDATE_FAQ_REQUEST,
    UPDATE_FAQ_SUCCESS,
    UPDATE_FAQ_FAIL,
    CLEAR_ERRORS
} from '../constants/faqConstant'

// Get All FAQ
export const getFaq = ()=>async(dispatch)=>{
    try {
        dispatch({type: FAQ_CONTENT_REQUEST})
  
        const {data} = await axios.get("/api/v1/faq")
        dispatch({
            type: FAQ_CONTENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FAQ_CONTENT_FAIL,
            payload:error.response.data.message,
        })
    }
  }

// Get Single FAQ Details
export const getSingleFaqDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_FAQ_REQUEST });
  
      const { data } = await axios.get(`/api/v1/faq/${id}`);
  
      dispatch({
        type: SINGLE_FAQ_SUCCESS,
        payload: data.faq,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_FAQ_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Update FAQ
export const updateFaq = (id, myFormData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_FAQ_REQUEST});
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.put(`/api/v1/faq/${id}`, myFormData, config);
  
      dispatch({ type: UPDATE_FAQ_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_FAQ_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  

  
    // Clearing Errors
    export const clearErrors = () => async (dispatch) => {
      dispatch({ type: CLEAR_ERRORS });
    };
  