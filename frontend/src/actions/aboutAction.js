import {ABOUT_CONTENT_REQUEST, ABOUT_CONTENT_SUCCESS, ABOUT_CONTENT_FAIL,SINGLE_ABOUT_CONTENT_REQUEST, SINGLE_ABOUT_CONTENT_SUCCESS, SINGLE_ABOUT_CONTENT_FAIL, UPDATE_ABOUT_REQUEST, UPDATE_ABOUT_SUCCESS, UPDATE_ABOUT_FAIL, CLEAR_ERRORS} from '../constants/aboutConstant'
import axios from 'axios'


// Get All About Hero Content
export const getAboutHeroContent = ()=>async(dispatch)=>{
    try {
        dispatch({type: ABOUT_CONTENT_REQUEST})

        const {data} = await axios.get("/api/v1/about")
        dispatch({
            type:ABOUT_CONTENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ABOUT_CONTENT_FAIL,
            payload:error.response.data.message,
        })
    }
}

  // Get Single About Hero Details
  export const getSingleAboutHeroDetail = (id) => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_ABOUT_CONTENT_REQUEST });
  
      const { data } = await axios.get(`/api/v1/about/${id}`);
  
      dispatch({
        type: SINGLE_ABOUT_CONTENT_SUCCESS,
        payload: data.adata,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_ABOUT_CONTENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Update About Content
export const updatAbouteHero = (id, myFormData) => async (dispatch) => {
try {
  dispatch({ type: UPDATE_ABOUT_REQUEST});

  const config = { headers: { "Content-Type": "multipart/form-data" } };

  const { data } = await axios.put(`/api/v1/about/${id}`, myFormData, config);

  dispatch({ type: UPDATE_ABOUT_SUCCESS, payload: data.success });
} catch (error) {
  dispatch({
    type: UPDATE_ABOUT_FAIL,
    payload: error.response.data.message,
  });
}
};



// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };