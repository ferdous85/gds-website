import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {useAlert} from 'react-alert'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAllBlog, createBlog,deleteBlog, clearErrors } from '../../../actions/blogAction'
import {BLOG_CREATE_RESET, DELETE_BLOG_RESET} from '../../../constants/blogConstant'

const BlogPage = ({history}) => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const { loading, error, blogs} = useSelector((state)=>state.allBlog)
    const { loading:createLoading, success, error:newError} = useSelector((state)=>state.createBlog)
    const { isDeleted} = useSelector((state)=>state.deleteBlog)


    const[smallTitle, setSmallTitle]= useState("")
    const[title, setTitle]= useState("")
    const[date, setDate]= useState("")
    const[description, setDescription]= useState("")
    const[image, setImage]= useState("")
    const[imagePreview, setImagePreview]= useState("/Profile.png")


    useEffect(() => {

        if (newError) {
            alert.error(newError);
            dispatch(clearErrors());
          }
        
      if (error) {
                alert.error(error);
                dispatch(clearErrors());
              }

              if (success) {
                alert.success("Blog Created Successfully");
                history.push("/admin/blog");
                dispatch({ type: BLOG_CREATE_RESET });
                setSmallTitle('')
                setTitle('')
                setDate('')
                setDescription('')
                
              }  
              
              if (isDeleted) {
                alert.success("Blog Delete Successfully");
                history.push("/admin/blog");
                dispatch({ type:  DELETE_BLOG_RESET});
              } 
            
        dispatch(getAllBlog())

    }, [dispatch, history,isDeleted, newError,success, error, alert])

    

    const updateFormSubmit = (e) => {
        e.preventDefault();
    
        const myFormData = new FormData();
    
        myFormData.set("smallTitle", smallTitle);
        myFormData.set("title", title);
        myFormData.set("date", date);
        myFormData.set("description", description);
        myFormData.set("image", image);
        dispatch(createBlog( myFormData))
      };

      const deleteBlogHandler = (id) => {
        dispatch(deleteBlog(id));
      };

      const formDataChange = (e) => {
        if (e.target.name === "image") {
          const reader = new FileReader();
    
          reader.onload = () => {
            if (reader.readyState === 2) {                
                setImage(reader.result);
                setImagePreview(reader.result);
            }
          };
    
          reader.readAsDataURL(e.target.files[0]);
        } else {
            console.log("Upload Successfully");
        }
      };

    return (
        <div className='adminDashboard'>
                <div className="adminSidebar">
                <Sidebar />
                </div>           
          <div className="adminMainPage">
            {loading ? <Loader /> :(<Container>
            <Row>                
                <Col xs={12} md={8}>
                <h2 className='text-center m-4'>Blog</h2>                
                    <Table striped bordered hover>
                    <thead>
                        <tr>                        
                        <th>Sub Title</th>                        
                        <th>title</th>   
                        <th>Date</th>                      
                        <th>Description</th>                        
                        <th>Image</th>                        
                        <th>Action</th>                        
                        </tr>
                    </thead>
                    {blogs && blogs.map((item)=>(<tbody key={item._id}>
                        <tr>
                            <td> {item.smallTitle} </td>
                            <td> {item.title} </td>
                            <td> {item.date} </td>
                            <td> {item.description} </td>
                            <td> <img className='heroImage' src={item.image.url} alt="Preview" /> </td>
                            <td> 
                            <Link  to={`/blog/${item._id}`}> <button className='d-inline p-2 btn btn-primary'>Change</button> </Link> 
                                
                                <button onClick={()=>{deleteBlogHandler(item._id)}} className='d-inline p-2 m-2 btn btn-danger'>Delete</button>
                            
                             </td>
                        </tr>                        
                    </tbody>))}
                </Table>
                
                
                </Col>
                <Col>
                {createLoading ? <Loader /> : (<Col xs={6} md={4} >
                <h1 className='text-center my-5'>Create New Blog</h1>
                <img style={{width:"600px", height:"400px"}} className='overflow-hidden' src={imagePreview} alt=""  />
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
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Title </label>
                    <input type="text"
                    name="title" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
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
                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Date</label>
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
                <button type="submit" className="changeBtn rounded">Create New Blog</button>
                </form>
                </Col>)}   
                </Col>
                
                
            </Row>

            <Row>
            

            </Row>
                       
            </Container>)}
              </div>         
          </div>
    )
}

export default BlogPage
