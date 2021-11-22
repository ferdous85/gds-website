import axios from "axios";
import {
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAIL,
  COURSE_CONTENT_REQUEST, 
    COURSE_CONTENT_SUCCESS, 
    COURSE_CONTENT_FAIL,
    SINGLE_COURSE_CONTENT_REQUEST,
    SINGLE_COURSE_CONTENT_SUCCESS,
    SINGLE_COURSE_CONTENT_FAIL,
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_FAIL,
    CLEAR_ERRORS
} from '../constants/courseConstant'

// Create Product
export const createCourse = (contentData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_COURSE_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const { data } = await axios.post(
      `/api/v1/course/new`,
      contentData,
      config
    );

    dispatch({
      type: CREATE_COURSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_COURSE_FAIL,
      payload: error.response.data.message,
    });
  }
};



// Get All Course
export const getAllCourse = ()=>async(dispatch)=>{
    try {
        dispatch({type:COURSE_CONTENT_REQUEST})

        const {data} = await axios.get("/api/v1/course")
        dispatch({
            type:COURSE_CONTENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COURSE_CONTENT_FAIL,
            payload:error.response.data.message,
        })
    }
}


  // Get Single Hero content Details
  export const getSingleCourseDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_COURSE_CONTENT_REQUEST });
  
      const { data } = await axios.get(`/api/v1/course/${id}`);
  
      dispatch({
        type: SINGLE_COURSE_CONTENT_SUCCESS,
        payload: data.course,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_COURSE_CONTENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  
// Update Hero Area Content
export const updateCourse = (id, myFormData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_COURSE_REQUEST});
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.put(`/api/v1/course/${id}`, myFormData, config);
  
      dispatch({ type: UPDATE_COURSE_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_COURSE_FAIL,
        payload: error.response.data.message,
      });
    }
  };


 // Clearing Errors
 export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };

