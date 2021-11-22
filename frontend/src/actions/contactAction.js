import { CLEAR_ERRORS, CONTACT_CONTENT_FAIL, CONTACT_CONTENT_REQUEST, CONTACT_CONTENT_SUCCESS, UPDATE_CONTACT_FAIL, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_SUCCESS } from '../constants/contactConstant'
import axios from 'axios'

// Get All Contact
export const getAllContact = ()=>async(dispatch)=>{
    try {
        dispatch({type: CONTACT_CONTENT_REQUEST})

        const {data} = await axios.get("/api/v1/contact")
        dispatch({
            type:CONTACT_CONTENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CONTACT_CONTENT_FAIL,
            payload:error.response.data.message,
        })
    }
}


// Update Contact
export const updateContact = (id, myFormData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_CONTACT_REQUEST});
    
      const config = { headers: { "Content-Type": "multipart/form-data" } };
    
      const { data } = await axios.put(`/api/v1/contact/${id}`, myFormData, config);
    
      dispatch({ type: UPDATE_CONTACT_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_CONTACT_FAIL,
        payload: error.response.data.message,
      });
    }
    };



// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };