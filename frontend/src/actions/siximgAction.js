import axios from 'axios'
import { CLEAR_ERRORS, DELETE_SIXIMG_FAIL, DELETE_SIXIMG_REQUEST, DELETE_SIXIMG_SUCCESS, SINGLE_SIXIMG_FAIL, SINGLE_SIXIMG_REQUEST, SINGLE_SIXIMG_SUCCESS, SIXIMG_CONTENT_FAIL, SIXIMG_CONTENT_REQUEST, SIXIMG_CONTENT_SUCCESS, SIXIMG_CREATE_FAIL, SIXIMG_CREATE_REQUEST, SIXIMG_CREATE_SUCCESS, UPDATE_SIXIMG_FAIL, UPDATE_SIXIMG_REQUEST, UPDATE_SIXIMG_SUCCESS } from '../constants/siximgConstant'


    // Create Six Image
export const createSixImg = (sixImgContent) => async (dispatch) => {
    try {
      dispatch({ type: SIXIMG_CREATE_REQUEST });
  
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
  
      const { data } = await axios.post(
        `/api/v1/siximg/new`,
        sixImgContent,
        config
      );
  
      dispatch({
        type: SIXIMG_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SIXIMG_CREATE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

    // Get All Six Image
    export const getAllSixImg = ()=>async(dispatch)=>{
        try {
            dispatch({type:SIXIMG_CONTENT_REQUEST})
    
            const {data} = await axios.get("/api/v1/siximg")
            dispatch({
                type:SIXIMG_CONTENT_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: SIXIMG_CONTENT_FAIL,
                payload:error.response.data.message,
            })
        }
    }

       // Get Single Six Image
       export const getSingleSixImg = (id) => async (dispatch) => {
        try {
          dispatch({ type: SINGLE_SIXIMG_REQUEST });
      
          const { data } = await axios.get(`/api/v1/siximg/${id}`);
      
          dispatch({
            type: SINGLE_SIXIMG_SUCCESS,
            payload: data.sixContent,
          });
        } catch (error) {
          dispatch({
            type: SINGLE_SIXIMG_FAIL,
            payload: error.response.data.message,
          });
        }
      };

       // Update Six Image
  export const updateSixImg = (id, myFormData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_SIXIMG_REQUEST});
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.put(`/api/v1/siximg/${id}`, myFormData, config);
  
      dispatch({ type: UPDATE_SIXIMG_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_SIXIMG_FAIL,
        payload: error.response.data.message,
      });
    }
  };


      // Delete Six Image
export const deleteSixImg = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_SIXIMG_REQUEST });
  
      const { data } = await axios.delete(`/api/v1/fiveimg/${id}`);
  
      dispatch({
        type: DELETE_SIXIMG_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_SIXIMG_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
    
    
   // Clearing Errors
   export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };

