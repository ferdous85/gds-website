import axios from 'axios'
import {     
    CLEAR_ERRORS,
    SINGLE_ONCLS_REQUEST,    
    SINGLE_ONCLS_SUCCESS,    
    SINGLE_ONCLS_FAIL,
    UPDATE_ONCLS_REQUEST,
    UPDATE_ONCLS_SUCCESS,
    UPDATE_ONCLS_FAIL,
    ONCLS_CONTENT_REQUEST,
    ONCLS_CONTENT_SUCCESS,
    ONCLS_CONTENT_FAIL
    } from '../constants/onclsConstant'

// Get All About Hero Content
export const getAllOnCls = ()=>async(dispatch)=>{
  try {
      dispatch({type: ONCLS_CONTENT_REQUEST})

      const {data} = await axios.get("/api/v1/onclses")
      dispatch({
          type:ONCLS_CONTENT_SUCCESS,
          payload: data
      })
  } catch (error) {
      dispatch({
          type: ONCLS_CONTENT_FAIL,
          payload:error.response.data.message,
      })
  }
}


  // Get Single Onlie Class
  export const getOnclsFiveDetail = () => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_ONCLS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/oncls`);
  
      dispatch({
        type: SINGLE_ONCLS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_ONCLS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Get Single Onlie Class(SIX)
  export const getOnclsSixDetail = () => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_ONCLS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/sixhour`);
  
      dispatch({
        type: SINGLE_ONCLS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_ONCLS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

   // Get Single Online Class
   export const getSingleOnCls = (id) => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_ONCLS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/onclses/${id}`);
  
      dispatch({
        type: SINGLE_ONCLS_SUCCESS,
        payload: data.oncls,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_ONCLS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


// Update Online Class
export const updatOncls = (id, myFormData) => async (dispatch) => {
try {
  dispatch({ type: UPDATE_ONCLS_REQUEST});

  const config = { headers: { "Content-Type": "multipart/form-data" } };

  const { data } = await axios.put(`/api/v1/onclses/${id}`, myFormData, config);

  dispatch({ type: UPDATE_ONCLS_SUCCESS, payload: data.success });
} catch (error) {
  dispatch({
    type: UPDATE_ONCLS_FAIL,
    payload: error.response.data.message,
  });
}
};



// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };