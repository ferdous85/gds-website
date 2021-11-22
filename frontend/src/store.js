import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { featureContentReducer, heroContentDetailsReducer, heroContentReducer, newHeroContentReducer, pricingContentReducer, singleHomePricingReducer, updateHeroAreaReducer, updateHeroFeatureReducer, updateHeroPricingReducer } from "./reducers/homeReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/userReducer";
import { aboutContentReducer, singleAboutReducer, updateAboutHeroReducer } from "./reducers/aboutReducer";
import { courseReducer, createCourseReducer, singleCourseDetailsReducer, updateCourseReducer } from "./reducers/courseReducer";
import { AllPackageReducer, singlePackageReducer, updatePackageReducer } from "./reducers/packageReducer";
import { AllIndfeesReducer, AllQuickTestReducer, singleIndFeesReducer, singleQuickTestReducer, updateIndFeesReducer, updateQuickTestReducer } from "./reducers/indfeesReducer";
import { createBlogReducer, deleteBlogReducer, getBlogReducer, singleBlogDetailsReducer, updateBlogReducer } from "./reducers/blogReducer";
import { AllFaqReducer, singleFaqReducer, updateFaqReducer } from "./reducers/faqReducer";
import { getAllOnClsReducer, onclsReducer, updateOnclsReducer } from "./reducers/onclsReducer";
import { getAllFiveImgReducer, singleFiveImgReducer, updateFiveImgReducer } from "./reducers/fiveimgReducer";
import { getAllSixImgReducer, singleSixImgReducer, updateSixImgReducer } from "./reducers/siximgReducer";
import { AllContactReducer, updateContactReducer } from "./reducers/contactReducer";




const middleware = [thunk];
const reducer = combineReducers({ 
    contents: heroContentReducer,
    user:userReducer,
    profile:profileReducer,
    forgotPassword: forgotPasswordReducer,
    newHeroContent: newHeroContentReducer,
    updateHeroArea: updateHeroAreaReducer,
    heroContent: heroContentDetailsReducer,
    feature: featureContentReducer,
    homePricings:pricingContentReducer,
    singleHomePricing: singleHomePricingReducer,
    updateHomePricing: updateHeroPricingReducer,
    updateFeature: updateHeroFeatureReducer,
    aboutContent: aboutContentReducer,
    singleAbout: singleAboutReducer,
    updateAbout: updateAboutHeroReducer,
    courses: courseReducer,
    singleCourse:singleCourseDetailsReducer,
    updateCourse: updateCourseReducer,
    createCourse: createCourseReducer,
    packages: AllPackageReducer,
    singlePackage:singlePackageReducer,
    updatePackage:updatePackageReducer,
    indfees:AllIndfeesReducer,
    singleIndfees: singleIndFeesReducer,
    updateIndfees:updateIndFeesReducer,
    quickTest:AllQuickTestReducer,
    singleQuickTest: singleQuickTestReducer,
    updateQuickTest:updateQuickTestReducer,
    createBlog: createBlogReducer,
    allBlog: getBlogReducer,
    singleBlog:singleBlogDetailsReducer,
    updateBlog:updateBlogReducer,
    deleteBlog:deleteBlogReducer,
    allFaq: AllFaqReducer,
    singleFaq:singleFaqReducer,
    updateFaq:updateFaqReducer,
    singleOncls:onclsReducer,
    updateOncls:updateOnclsReducer,
    allOncls:getAllOnClsReducer,
    allFiveimg:getAllFiveImgReducer,
    singleFiveimg:singleFiveImgReducer,
    updateFiveimg:updateFiveImgReducer,
    allSiximg:getAllSixImgReducer,
    singleSiximg:singleSixImgReducer,
    updateSiximg:updateSixImgReducer,
    allContact: AllContactReducer,
    updateContact:updateContactReducer
  })

let initialState = { }

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);



export default store;