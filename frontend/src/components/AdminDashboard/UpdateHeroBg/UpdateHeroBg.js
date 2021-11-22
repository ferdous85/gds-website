import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {updateHero, getHeroContentDetails, clearErrors} from '../../../actions/homeAction'
import {UPDATE_HEROAREA_RESET} from '../../../constants/homeConstant'
import Loader from "../../Loader/Loader";
import Sidebar from '../Sidebar/Sidebar'




const UpdateHeroBg = ({ match, history }) => {

  const dispatch = useDispatch();
  const alert = useAlert()  

  const { error, content } = useSelector((state) => state.heroContent);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.updateHeroArea);

  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState('');
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  const contentId = match.params.id;

  useEffect(() => {
    if(content && content._id !== contentId) {
      dispatch(getHeroContentDetails(contentId))
    } else{
      setTitle(content.title);
      setSubTitle(content.subtitle);
      setImagePreview(content.image.url)
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
      alert.success("Updated Successfully");
      history.push("/admin/homePage");
      dispatch({ type: UPDATE_HEROAREA_RESET });
    }

    }, [dispatch,contentId, error, content, history,isUpdated,updateError, alert])
  

    const updateFormSubmit = (e) => {
      e.preventDefault();
  
      const myFormData = new FormData();
  
      myFormData.set("title", title);
      myFormData.set("subtitle", subtitle);
      myFormData.set("image", image);
      dispatch(updateHero(contentId, myFormData))
    };

    const formDataChange = (e) => {
      if (e.target.name === "image") {
        const reader = new FileReader();
  
        reader.onload = () => {
          if (reader.readyState === 2) {
              setImagePreview(reader.result);
              setImage(reader.result);
          }
        };
  
        reader.readAsDataURL(e.target.files[0]);
      } else {
          console.log("Upload Successfully");
      }
    };

  return (
    <>
    {loading ? <Loader /> :(<div className="adminDashboard">
    <div className="adminSidebar">
      <Sidebar />
    </div>
    <div className="adminMainPage">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
          <h1 className='text-center my-5'>Update Hero Content</h1>
          <img style={{width:"700px", height:"400px"}} className='overflow-hidden' src={imagePreview} alt=""  />
          <form className='mb-5' onSubmit={updateFormSubmit} encType="multipart/form-data" >
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Title</label>
            <input type="text"
            name="title" 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Sub Title</label>
            <input 
            name="subtitle"
            type="text"
            value={subtitle} 
            onChange={(e)=>setSubTitle(e.target.value)}
            className="form-control" 
            id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Image</label>
            <input 
            name="image"
            accept="image/*"
            onChange={formDataChange}
            className="form-control" 
            type="file" 
            id="formFile"/>
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

export default UpdateHeroBg
