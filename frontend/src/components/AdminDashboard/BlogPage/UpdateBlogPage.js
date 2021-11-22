import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {updateBlog, getSingleBlogDetails, clearErrors} from '../../../actions/blogAction'
import { UPDATE_BLOG_RESET } from "../../../constants/blogConstant";
import Loader from "../../Loader/Loader";
import Sidebar from '../Sidebar/Sidebar'

const UpdateBlogPage = ({ match, history }) => {
    const dispatch = useDispatch();
    const alert = useAlert()  
  
    const { error, blog } = useSelector((state) => state.singleBlog);

    const {
        loading,
        error: updateError,
        isUpdated,
      } = useSelector((state) => state.updateBlog);

        const [smallTitle, setSmallTitle] = useState("");
        const [title, setTitle] = useState('');
        const [date, setDate] = useState('');
        const [description, setDescription] = useState('');
        const [image, setImage] = useState();
        const [imagePreview, setImagePreview] = useState();

        const blogId = match.params.id;
        
        useEffect(() => {
            if(blog && blog._id !== blogId) {
              dispatch(getSingleBlogDetails(blogId))
            } else{
              setSmallTitle(blog.smallTitle);
              setTitle(blog.title);
              setDate(blog.date);
              setDescription(blog.description);
              setImagePreview(blog.image.url)
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
              alert.success("Blog Updated Successfully");
              history.push("/admin/blog");
              dispatch({ type: UPDATE_BLOG_RESET });
            }
        
            }, [dispatch,blogId, error, blog, history,isUpdated,updateError, alert])
          
            const updateFormSubmit = (e) => {
                e.preventDefault();

                const myFormData = new FormData();
            
                myFormData.set("smallTitle", smallTitle);
                myFormData.set("title", title);
                myFormData.set("date", date);
                myFormData.set("description", description);
                myFormData.set("image", image);
                dispatch(updateBlog(blogId, myFormData))
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
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Category</label>
                    <input type="text"
                    name="smallTitle" 
                    value={smallTitle}
                    onChange={(e)=>setSmallTitle(e.target.value)}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"/>
                    
                </div>
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
                <div className="my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Price </label>
                    <textarea type="text"
                    name="description" 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Description</label>
                    <input  
                    name="date"
                    type="date"
                    value={date} 
                    onChange={(e)=>setDate(e.target.value)}
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
                <Link to='/admin/blog'> <button type="submit" className="changeBtn rounded">Cancel</button></Link>
                </form>
                </Col>
                
                </Row>
            </Container>
            </div>
    
            
                </div>)}
            
            </>
            )
        }

export default UpdateBlogPage
