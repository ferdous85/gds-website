import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleFeatureDetail, clearErrors, updateHeroFeature} from '../../../actions/homeAction'
import {UPDATE_FEATURE_RESET} from '../../../constants/homeConstant'
import Loader from "../../Loader/Loader";
import Sidebar from '../Sidebar/Sidebar'




const UpdateHeroFeature = ({ match, history }) => {

  const dispatch = useDispatch();
  const alert = useAlert()  

  const { error, loading, feature } = useSelector((state) => state.feature);

  const { error:updateError, loading:updateLoading, isUpdated } = useSelector((state) => state.updateFeature);



  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');

  

  const featureId = match.params.id;

  useEffect(() => {
    if(feature && feature._id !== featureId) {
      dispatch(getSingleFeatureDetail(featureId))
    } else{
      setTitle(feature.title)
      setSubtitle(feature.subtitle)
      setDescription(feature.description)
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Feature Updated Successfully");
      history.push("/admin/homePage");
      dispatch({ type: UPDATE_FEATURE_RESET });
    }

    }, [dispatch,featureId, error, feature,loading, history,isUpdated,updateError, alert])
  

    const updateFormSubmit = (e) => {
      e.preventDefault();
  
      const myFormData = new FormData();
  
      myFormData.set("title", title);
      myFormData.set("subtitle", subtitle);
      myFormData.set("description", description);
      
      dispatch(updateHeroFeature(featureId, myFormData))
    };

    

  return (
    <>
    {updateLoading ? <Loader /> :(<div className="adminDashboard">
    <div className="adminSidebar">
      <Sidebar />
    </div>
    <div className="adminMainPage">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
          <h1 className='text-center my-5'>Update Feature Area</h1>
          
          <form className='mb-5' onSubmit={updateFormSubmit} encType="multipart/form-data" >
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Title</label>
            <input type="text"
            name="title" 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Subtitle</label>
            <input 
            name="subtitle"
            type="text"
            value={subtitle} 
            onChange={(e)=>setSubtitle(e.target.value)}
            className="form-control" 
            id="exampleInputPassword1"/>
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Description</label>
            <textarea type="text"
            name="description" 
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          
          <button type="submit" className="changeBtn rounded">Update Now</button>
          <Link to='/admin/homePage'> <button type="submit" className="changeBtn rounded">Cancel</button></Link>
        </form>
        </Col>
        
        </Row>
      </Container>
    </div>
    
      
    </div>)}
      
    </>
  )
}

export default UpdateHeroFeature