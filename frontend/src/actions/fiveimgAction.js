import axios from 'axios'
import { CLEAR_ERRORS, 
    DELETE_FIVEIMG_FAIL, 
    DELETE_FIVEIMG_REQUEST, 
    DELETE_FIVEIMG_SUCCESS, 
    FIVEIMG_CONTENT_FAIL, 
    FIVEIMG_CONTENT_REQUEST, 
    FIVEIMG_CONTENT_SUCCESS, 
    FIVEIMG_CREATE_FAIL, 
    FIVEIMG_CREATE_REQUEST, 
    FIVEIMG_CREATE_SUCCESS, 
    SINGLE_FIVEIMG_FAIL, 
    SINGLE_FIVEIMG_REQUEST, 
    SINGLE_FIVEIMG_SUCCESS, 
    UPDATE_FIVEIMG_FAIL, 
    UPDATE_FIVEIMG_REQUEST, 
    UPDATE_FIVEIMG_SUCCESS } from '../constants/fiveimgContant'


    // Create Five Image
export const createFiveImg = (fiveImgContent) => async (dispatch) => {
    try {
      dispatch({ type: FIVEIMG_CREATE_REQUEST });
  
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
  
      const { data } = await axios.post(
        `/api/v1/fiveimg/new`,
        fiveImgContent,
        config
      );
  
      dispatch({
        type: FIVEIMG_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FIVEIMG_CREATE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

    // Get All Five Image
    export const getAllFiveImg = ()=>async(dispatch)=>{
        try {
            dispatch({type:FIVEIMG_CONTENT_REQUEST})
    
            const {data} = await axios.get("/api/v1/fiveimg")
            dispatch({
                type:FIVEIMG_CONTENT_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: FIVEIMG_CONTENT_FAIL,
                payload:error.response.data.message,
            })
        }
    }

       // Get Single Five Image
       export const getSingleFiveImg = (id) => async (dispatch) => {
        try {
          dispatch({ type: SINGLE_FIVEIMG_REQUEST });
      
          const { data } = await axios.get(`/api/v1/fiveimg/${id}`);
      
          dispatch({
            type: SINGLE_FIVEIMG_SUCCESS,
            payload: data.imgContent,
          });
        } catch (error) {
          dispatch({
            type: SINGLE_FIVEIMG_FAIL,
            payload: error.response.data.message,
          });
        }
      };

       // Update Five Image
  export const updateFiveImg = (id, myFormData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_FIVEIMG_REQUEST});
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.put(`/api/v1/fiveimg/${id}`, myFormData, config);
  
      dispatch({ type: UPDATE_FIVEIMG_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_FIVEIMG_FAIL,
        payload: error.response.data.message,
      });
    }
  };


      // Delete Blog
export const deleteFiveImg = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_FIVEIMG_REQUEST });
  
      const { data } = await axios.delete(`/api/v1/fiveimg/${id}`);
  
      dispatch({
        type: DELETE_FIVEIMG_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_FIVEIMG_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
    
    
   // Clearing Errors
   export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };

