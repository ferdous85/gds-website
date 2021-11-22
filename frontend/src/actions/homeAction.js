import axios from "axios";

import {ALL_CONTENT_REQUEST, 
  ALL_CONTENT_SUCCESS, 
  ALL_CONTENT_FAIL,
  UPDATE_HEROAREA_REQUEST,
  UPDATE_HEROAREA_SUCCESS,
  UPDATE_HEROAREA_FAIL, 
  HEROAREA_CONTENT_REQUEST, 
  HEROAREA_CONTENT_SUCCESS, 
  HEROAREA_CONTENT_FAIL,   
  CREATE_HERO_REQUEST, 
  CREATE_HERO_SUCCESS, 
  CREATE_HERO_FAIL,
  FEATURE_CONTENT_REQUEST,
  FEATURE_CONTENT_SUCCESS,
  FEATURE_CONTENT_FAIL,
  PRICING_CONTENT_REQUEST,
  PRICING_CONTENT_SUCCESS,
  PRICING_CONTENT_FAIL,
  SINGLE_PRICING_REQUEST,
   SINGLE_PRICING_SUCCESS,
   SINGLE_PRICING_FAIL,
   UPDATE_PRICING_REQUEST,
   UPDATE_PRICING_SUCCESS,
   UPDATE_PRICING_FAIL,
   UPDATE_FEATURE_REQUEST,
   UPDATE_FEATURE_SUCCESS,
   UPDATE_FEATURE_FAIL,
   CLEAR_ERRORS,
   SINGLE_FEATURE_REQUEST,
   SINGLE_FEATURE_SUCCESS,
   SINGLE_FEATURE_FAIL,
} from '../constants/homeConstant'


// Create Product
export const createHeroContent = (contentData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_HERO_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const { data } = await axios.post(
      `/api/v1/herobg/new`,
      contentData,
      config
    );

    dispatch({
      type: CREATE_HERO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_HERO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Hero Area Content
export const getHeroContent = ()=>async(dispatch)=>{
    try {
        dispatch({type: ALL_CONTENT_REQUEST})

        const {data} = await axios.get("/api/v1/herobg")
        dispatch({
            type:ALL_CONTENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_CONTENT_FAIL,
            payload:error.response.data.message,
        })
    }
}


// Update Hero Area Content
export const updateHero = (id, myFormData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_HEROAREA_REQUEST});
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.put(`/api/v1/herobg/${id}`, myFormData, config);
  
      dispatch({ type: UPDATE_HEROAREA_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_HEROAREA_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Get Single Hero content Details
export const getHeroContentDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: HEROAREA_CONTENT_REQUEST });

    const { data } = await axios.get(`/api/v1/herobg/${id}`);

    dispatch({
      type: HEROAREA_CONTENT_SUCCESS,
      payload: data.content,
    });
  } catch (error) {
    dispatch({
      type: HEROAREA_CONTENT_FAIL,
      payload: error.response.data.message,
    });
  }
};



  // Get Feature Content
export const getFeatureContent = ()=>async(dispatch)=>{
  try {
      dispatch({type: FEATURE_CONTENT_REQUEST})

      const {data} = await axios.get("/api/v1/feature")
      dispatch({
          type:FEATURE_CONTENT_SUCCESS,
          payload: data
      })
  } catch (error) {
      dispatch({
          type: FEATURE_CONTENT_FAIL,
          payload:error.response.data.message,
      })
  }
}
    // Get Single Price content Details
    export const getSingleFeatureDetail = (id) => async (dispatch) => {
      try {
        dispatch({ type: SINGLE_FEATURE_REQUEST });
    
        const { data } = await axios.get(`/api/v1/feature/${id}`);
    
        dispatch({
          type: SINGLE_FEATURE_SUCCESS,
          payload: data.data,
        });
      } catch (error) {
        dispatch({
          type: SINGLE_FEATURE_FAIL,
          payload: error.response.data.message,
        });
      }
    };

// Update Hero Feature Content
export const updateHeroFeature = (id, myFormData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_FEATURE_REQUEST});

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(`/api/v1/feature/${id}`, myFormData, config);

    dispatch({ type: UPDATE_FEATURE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_FEATURE_FAIL,
      payload: error.response.data.message,
    });
  }
};


  // Get All Pricing Content
  export const getPricingContent = ()=>async(dispatch)=>{
    try {
        dispatch({type: PRICING_CONTENT_REQUEST})
  
        const {data} = await axios.get("/api/v1/pricing")
        dispatch({
            type:PRICING_CONTENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRICING_CONTENT_FAIL,
            payload:error.response.data.message,
        })
    }
  }

    // Get Single Price content Details
export const getSinglePriceDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_PRICING_REQUEST });

    const { data } = await axios.get(`/api/v1/pricing/${id}`);

    dispatch({
      type: SINGLE_PRICING_SUCCESS,
      payload: data.pricing,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_PRICING_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Hero Pricing Content
export const updateHeroPricing = (id, myFormData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRICING_REQUEST});

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(`/api/v1/pricing/${id}`, myFormData, config);

    dispatch({ type: UPDATE_PRICING_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PRICING_FAIL,
      payload: error.response.data.message,
    });
  }
};


  // Clearing Errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
