import React, { useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {useAlert} from 'react-alert'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAllCourse, clearErrors } from '../../../actions/courseAction'


const CoursePage = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const { loading, error, courses} = useSelector((state)=>state.courses)
    // const { loading:createLoading, success, error:newError} = useSelector((state)=>state.createCourse)


    // const[name, setName]= useState("")
    // const[price, setPrice]= useState("")
    // const[description, setDescription]= useState("")
    // const[image, setImage]= useState("")


    useEffect(() => {
        if(error) {
            return alert.error(error)
             }
      if (error) {
                alert.error(error);
                dispatch(clearErrors());
              }
            
        dispatch(getAllCourse())

    }, [dispatch, error, alert])

    // const updateFormSubmit = (e) => {
    //     e.preventDefault();
    
    //     const myFormData = new FormData();
    
    //     myFormData.set("name", name);
    //     myFormData.set("price", price);
    //     myFormData.set("description", description);
    //     myFormData.set("image", image);
    //     dispatch(createCourse( myFormData))
    //   };

    //   const formDataChange = (e) => {
    //     if (e.target.name === "image") {
    //       const reader = new FileReader();
    
    //       reader.onload = () => {
    //         if (reader.readyState === 2) {                
    //             setImage(reader.result);
    //         }
    //       };
    
    //       reader.readAsDataURL(e.target.files[0]);
    //     } else {
    //         console.log("Upload Successfully");
    //     }
    //   };

    return (
        <div className='adminDashboard'>
                <div className="adminSidebar">
                <Sidebar />
                </div>           
          <div className="adminMainPage">
            {loading ? <Loader /> :(<Container>
            <Row>                
                <Col md={{ span: 6, offset: 3 }}>
                <h2 className='text-center m-4'>Our Package</h2>                
                    <Table striped bordered hover>
                    <thead>
                        <tr>                        
                        <th>Package Name</th>                        
                        <th>Package Price</th>                        
                        <th>Description</th>                        
                        <th>Image</th>                        
                        <th>Action</th>                        
                        </tr>
                    </thead>
                    {courses && courses.map((item)=>(<tbody key={item._id}>
                        <tr>
                            <td> {item.name} </td>
                            <td> $ {item.price} </td>
                            <td> {item.description} </td>
                            <td> <img className='heroImage' src={item.image.url} alt="Preview" /> </td>
                            <td> <Link className='changeBtn rounded' to={`/course/${item._id}`}>Change</Link> </td>
                        </tr>                        
                    </tbody>))}
                </Table>
                
                
                </Col>
                
                
            </Row>

            <Row>
            {/* {createLoading ? <Loader /> : (<Col >
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
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Price</label>
                    <input 
                    name="price"
                    type="number"
                    value={price} 
                    onChange={(e)=>setPrice(e.target.value)}
                    className="form-control" 
                    id="exampleInputPassword1"/>
                </div>
                <div className="my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Package Name</label>
                    <input type="text"
                    name="description" 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"/>
                    
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
                <button type="submit" className="changeBtn rounded">Create</button>
                </form>
                </Col>)} */}

            </Row>
                       
            </Container>)}
              </div>         
          </div>
    )
}

export default CoursePage
