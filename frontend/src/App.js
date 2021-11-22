import './App.css';
import React,{useEffect} from 'react'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import FiveHrClass from './pages/FiveHrClass/FiveHrClass';
import SixHourClass from './pages/SixHrClass/SixHrClass';
import Packages from './pages/Packages/Packages';
import Blog from './pages/Blog/Blog';
import Faq from './pages/Faq/Faq';
import Contact from './pages/Contact/Contact';
import IndividualFees from './pages/IndividualFees/IndividualFees';
import LoginSignUp from './components/User/LoginSignUp';
import WebFont from "webfontloader";
import store from './store'
import {loadUser} from './actions/userAction'
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/Route/ProtectedRoute';
import Profile from './components/User/Profile';
import AdminDashboard from './components/AdminDashboard/Dashboard/AdminDashboard';
import UpdateProfile from './components/User/UpdateProfile'
import UpdatePassword from './components/User/UpdatePassword'
import ForgotPassword from './components/User/ForgotPassword'
import ResetPassword from './components/User/ResetPassword'
import AdminHomePage from './components/AdminDashboard/HomePage/AdminHomePage'
import UpdateHeroBg from './components/AdminDashboard/UpdateHeroBg/UpdateHeroBg';
import UpdateHeroPricing from './components/AdminDashboard/UpdateHeroPricing/UpdateHeroPricing';
import UpdateHeroFeature from './components/AdminDashboard/UpdateHeroFeature/UpdateHeroFeature';
import AboutPage from './components/AdminDashboard/AboutPage/AboutPage';
import CoursePage from './components/AdminDashboard/CoursePage/CoursePage';
import PackagePage from './components/AdminDashboard/PackagePage/PackagePage';
import IndFeesPage from './components/AdminDashboard/IndFeesPage/IndFeesPage';
import UpdatePackage from './components/AdminDashboard/PackagePage/UpdatePackage';
import UpdateCoursePage from './components/AdminDashboard/CoursePage/UpdateCoursePage';
import UpdateAboutPage from './components/AdminDashboard/UpdateAboutPage/UpdateAboutPage';
import UpdateIndFees from './components/AdminDashboard/IndFeesPage/UpdateIndFees';
import UpdateQuickTest from './components/AdminDashboard/IndFeesPage/UpdateQuickTest';
import BlogPage from './components/AdminDashboard/BlogPage/BlogPage';
import UpdateBlogPage from './components/AdminDashboard/BlogPage/UpdateBlogPage';
import FaqPage from './components/AdminDashboard/FaqPage/FaqPage';
import UpdateFaqPage from './components/AdminDashboard/FaqPage/UpdateFaqPage';
import OnClsPage from './components/AdminDashboard/OnClsPage/OnClsPage';
import UpdateOnCls from './components/AdminDashboard/OnClsPage/UpdateOnCls';
import UpdateFiveImg from './components/AdminDashboard/OnClsPage/UpdateFiveImg';
import UpdateSixImg from './components/AdminDashboard/OnClsPage/UpdateSixImg';
import ContactUpdatePage from './components/AdminDashboard/ContactPage/ContactUpdatePage';







function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
 store.dispatch(loadUser())

  }, []);

  
  return (
    <>
    <Router>
    
      <NavBar />
      
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/courses' component={Courses} />
      <Route exact path='/fivehrclass' component={FiveHrClass} />
      <Route exact path='/sixhrclass' component={SixHourClass} />
      <Route exact path='/packages' component={Packages} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/faq' component={Faq} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/indfees' component={IndividualFees} />
      <Route exact path="/password/forgot" component={ForgotPassword} />
      <Route exact path='/login' component={LoginSignUp} />
      <Route exact path='/password/reset/:token' component={ResetPassword} />

      <ProtectedRoute exact path="/account" component={Profile} />
      <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
      <ProtectedRoute exact path="/password/update" component={UpdatePassword} />
      <ProtectedRoute exact path="/admin/dashboard" component={AdminDashboard} />
      <ProtectedRoute exact path="/admin/homePage" component={AdminHomePage} />
      <ProtectedRoute exact path="/herobg/:id" isAdmin={true} component={UpdateHeroBg} />
      <ProtectedRoute exact path="/pricing/:id" isAdmin={true} component={UpdateHeroPricing} />
      <ProtectedRoute exact path="/feature/:id" isAdmin={true} component={UpdateHeroFeature} />
      <ProtectedRoute exact path="/admin/about" isAdmin={true} component={AboutPage} />
      <ProtectedRoute exact path="/about/:id" isAdmin={true} component={UpdateAboutPage} />
      <ProtectedRoute exact path="/admin/course" isAdmin={true} component={CoursePage} />
      <ProtectedRoute exact path="/course/:id" isAdmin={true} component={UpdateCoursePage} />
      <ProtectedRoute exact path="/admin/package" isAdmin={true} component={PackagePage} />
      <ProtectedRoute exact path="/package/:id" isAdmin={true} component={UpdatePackage} />
      <ProtectedRoute exact path="/admin/indfees" isAdmin={true} component={IndFeesPage} />
      <ProtectedRoute exact path="/indfees/:id" isAdmin={true} component={UpdateIndFees} />
      <ProtectedRoute exact path="/quicktest/:id" isAdmin={true} component={UpdateQuickTest} />
      <ProtectedRoute exact path="/admin/blog" isAdmin={true} component={BlogPage} />
      <ProtectedRoute exact path="/blog/:id" isAdmin={true} component={UpdateBlogPage} />
      <ProtectedRoute exact path="/admin/faq" isAdmin={true} component={FaqPage} />
      <ProtectedRoute exact path="/faq/:id" isAdmin={true} component={UpdateFaqPage} />
      <ProtectedRoute exact path="/admin/oncls" isAdmin={true} component={OnClsPage} />
      <ProtectedRoute exact path="/onclses/:id" isAdmin={true} component={UpdateOnCls} />
      <ProtectedRoute exact path="/five/:id" isAdmin={true} component={UpdateFiveImg} />
      <ProtectedRoute exact path="/six/:id" isAdmin={true} component={UpdateSixImg} />
      <ProtectedRoute exact path="/admin/contact" isAdmin={true} component={ContactUpdatePage} />





    </Switch>
    
    {isAuthenticated ? "" : <Footer />}
    </Router>
    
    </>
  );
}

export default App
