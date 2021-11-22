import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {updateCourse, getSingleCourseDetails, clearErrors} from '../../../actions/courseAction'
import { UPDATE_COURSE_RESET } from "../../../constants/courseConstant";
import Loader from "../../Loader/Loader";
import Sidebar from '../Sidebar/Sidebar'

const UpdateCoursePage = ({ match, history }) => {
    const dispatch = useDispatch();
    const alert = useAlert()  
  
    const { error, course } = useSelector((state) => state.singleCourse);

    const {
        loading,
        error: updateError,
        isUpdated,
      } = useSelector((state) => state.updateCourse);

        const [name, setName] = useState("");
        const [price, setPrice] = useState('');
        const [description, setDescription] = useState('');
        const [image, setImage] = useState();
        const [imagePreview, setImagePreview] = useState();

        const courseId = match.params.id;
        
        useEffect(() => {
            if(course && course._id !== courseId) {
              dispatch(getSingleCourseDetails(courseId))
            } else{
              setName(course.name);
              setPrice(course.price);
              setDescription(course.description);
              setImagePreview(course.image.url)
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
              alert.success("Course Updated Successfully");
              history.push("/admin/course");
              dispatch({ type: UPDATE_COURSE_RESET });
            }
        
            }, [dispatch,courseId, error, course, history,isUpdated,updateError, alert])
          
            const updateFormSubmit = (e) => {
                e.preventDefault();

                const myFormData = new FormData();
            
                myFormData.set("name", name);
                myFormData.set("price", price);
                myFormData.set("description", description);
                myFormData.set("image", image);
                dispatch(updateCourse(courseId, myFormData))
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
                <h1 className='text-center my-5'>Update Course</h1>
                <img style={{width:"700px", height:"400px"}} className='overflow-hidden' src={imagePreview} alt=""  />
                <form className='mb-5' onSubmit={updateFormSubmit} encType="multipart/form-data" >
                <div className="my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Package Name</label>
                    <input type="text"
                    name="name" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"/>
                    
                </div>
                <div className="my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Price </label>
                    <input type="number"
                    name="price" 
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Description</label>
                    <textarea  
                    name="description"
                    type="text"
                    value={description} 
                    onChange={(e)=>setDescription(e.target.value)}
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
                <Link to='/admin/course'> <button type="submit" className="changeBtn rounded">Cancel</button></Link>
                </form>
                </Col>
                
                </Row>
            </Container>
            </div>
    
            
                </div>)}
            
            </>
            )
        }

export default UpdateCoursePage
