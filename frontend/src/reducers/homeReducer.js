import {ALL_CONTENT_REQUEST, 
  ALL_CONTENT_SUCCESS, 
  ALL_CONTENT_FAIL,
  UPDATE_HEROAREA_REQUEST,
  UPDATE_HEROAREA_SUCCESS,
  UPDATE_HEROAREA_FAIL,
  UPDATE_HEROAREA_RESET,
  CREATE_HERO_REQUEST,
  CREATE_HERO_SUCCESS,
  CREATE_HERO_FAIL,
  CREATE_HERO_RESET, 
  FEATURE_CONTENT_REQUEST,
  FEATURE_CONTENT_SUCCESS,
  FEATURE_CONTENT_FAIL,
  HEROAREA_CONTENT_REQUEST, 
  HEROAREA_CONTENT_SUCCESS,
   HEROAREA_CONTENT_FAIL,
   CLEAR_ERRORS,
   PRICING_CONTENT_REQUEST,
   PRICING_CONTENT_SUCCESS,
   PRICING_CONTENT_FAIL,
   SINGLE_PRICING_REQUEST,
   SINGLE_PRICING_SUCCESS,
   SINGLE_PRICING_FAIL,
   UPDATE_PRICING_REQUEST,
   UPDATE_PRICING_SUCCESS,
   UPDATE_PRICING_FAIL,
   UPDATE_PRICING_RESET,
   UPDATE_FEATURE_REQUEST,
   UPDATE_FEATURE_SUCCESS,
   UPDATE_FEATURE_FAIL,
   UPDATE_FEATURE_RESET,
   SINGLE_FEATURE_REQUEST,
   SINGLE_FEATURE_SUCCESS,
   SINGLE_FEATURE_FAIL,
  } from '../constants/homeConstant'


//  Hero Area Content Reducer - 
export const heroContentReducer = (state={contents:[]},action)=>{
        switch (action.type) {
            case ALL_CONTENT_REQUEST:
                return {
                    loading: true,
                    contents:[]
                }
             case ALL_CONTENT_SUCCESS:
                return {
                    loading: false,
                    contents:action.payload.contents
                    }   
            case ALL_CONTENT_FAIL:
                return {
                    loading: false,
                    error:action.payload
                     }
            case CLEAR_ERRORS:
                return {
                    ...state,
                     error:null
                     }         
            default:
                return state
        }
}

//  Feature Area Content Reducer - 
export const featureContentReducer = (state = { feature: {} }, action) => {
  switch (action.type) {
    case FEATURE_CONTENT_REQUEST:
    case SINGLE_FEATURE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case FEATURE_CONTENT_SUCCESS:
      case SINGLE_FEATURE_SUCCESS:
      return {
        loading: false,
        feature: action.payload,
      };
    case FEATURE_CONTENT_FAIL:
      case SINGLE_FEATURE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Update single Hero Area Reducer
export const updateHeroFeatureReducer = (state={},action)=>{ 
  switch (action.type) {
      case UPDATE_FEATURE_REQUEST:
          return {
              ...state,
              loading:true
          }
      case UPDATE_FEATURE_SUCCESS:
          return{
              ...state,
              loading:false,
              isUpdated: action.payload
          }    
      case UPDATE_FEATURE_FAIL:
          return{
              ...state,
              loading: false,
              error: action.payload,
          }
      case UPDATE_FEATURE_RESET:
          return{
              ...state,
              isUpdated: false,
          }
      case CLEAR_ERRORS:
          return {
                ...state,
                error: null,
              };
      default:
          return state;
  }
}

// All Pricing Content Reducer - 
export const pricingContentReducer = (state={pricings:[]},action)=>{
  switch (action.type) {
      case PRICING_CONTENT_REQUEST:
          return {
              loading: true,
              pricings:[]
          }
       case PRICING_CONTENT_SUCCESS:
          return {
              loading: false,
              pricings:action.payload.pricings
              }   
      case PRICING_CONTENT_FAIL:
          return {
              loading: false,
              error:action.payload
               }
      case CLEAR_ERRORS:
          return {
              ...state,
               error:null
               }         
      default:
          return state
  }
}

// Create Hero Area 
export const newHeroContentReducer = (state = { content: {} }, action) => {
  switch (action.type) {
    case CREATE_HERO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_HERO_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        content: action.payload.content,
      };
    case CREATE_HERO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_HERO_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Update single Hero Area Reducer
export const updateHeroAreaReducer = (state={},action)=>{ 
    switch (action.type) {
        case UPDATE_HEROAREA_REQUEST:
            return {
                ...state,
                loading:true
            }
        case UPDATE_HEROAREA_SUCCESS:
            return{
                ...state,
                loading:false,
                isUpdated: action.payload
            }    
        case UPDATE_HEROAREA_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_HEROAREA_RESET:
            return{
                ...state,
                isUpdated: false,
            }
        case CLEAR_ERRORS:
            return {
                  ...state,
                  error: null,
                };
        default:
            return state;
    }
}

// Single Hero Content reducer
export const heroContentDetailsReducer = (state = { content: {} }, action) => {
    switch (action.type) {
      case HEROAREA_CONTENT_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case HEROAREA_CONTENT_SUCCESS:
        return {
          loading: false,
          content: action.payload,
        };
      case HEROAREA_CONTENT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };


 // Single Pricing Content reducer
export const singleHomePricingReducer = (state = { pricing: {} }, action) => {
  switch (action.type) {
    case SINGLE_PRICING_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case SINGLE_PRICING_SUCCESS:
      return {
        loading: false,
        pricing: action.payload,
      };
    case SINGLE_PRICING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Update Hero Area Reducer
export const updateHeroPricingReducer = (state={},action)=>{ 
  switch (action.type) {
      case UPDATE_PRICING_REQUEST:
          return {
              ...state,
              loading:true
          }
      case UPDATE_PRICING_SUCCESS:
          return{
              ...state,
              loading:false,
              isUpdated: action.payload
          }    
      case UPDATE_PRICING_FAIL:
          return{
              ...state,
              loading: false,
              error: action.payload,
          }
      case UPDATE_PRICING_RESET:
          return{
              ...state,
              isUpdated: false,
          }
      case CLEAR_ERRORS:
          return {
                ...state,
                error: null,
              };
      default:
          return state;
  }
}