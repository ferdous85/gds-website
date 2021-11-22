import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {useAlert} from 'react-alert'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { getAllContact, updateContact, clearErrors } from '../../../actions/contactAction'



const ContactUpdatePage = ({history}) => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const { loading, error, content} = useSelector((state)=>state.allContact)

    const { error:updateError, isUpdated } = useSelector((state) => state.updateContact);

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [lessonHour, setLessonHour] = useState('');

   
    useEffect(() => {
        dispatch(getAllContact())
        
    }, [dispatch])
   


    useEffect(() => {
        if (content ) {
            setEmail(content.email)
             setPhone(content.phone)
            setAddress(content.address)                
            setLessonHour(content.lessonHour)                
            } 
        if(error) {
            alert.error(error)
            dispatch(clearErrors())

             }

             if (updateError) {
                alert.error(updateError);
                dispatch(clearErrors());
              } 
             if (isUpdated) {
                alert.success("Contact Updated Successfully");
                
                setEmail('')
                setPhone('')
                setAddress('')
                setLessonHour("")
              }
          
        

    }, [dispatch,isUpdated,updateError,content,history, error, alert])

    const updateFormSubmit = (e) => {
        e.preventDefault();
    
        const myFormData = new FormData();
    
        myFormData.set("email", email);
        myFormData.set("phone", phone);
        myFormData.set("address", address);
        myFormData.set("lessonHour", lessonHour);
        
        dispatch(updateContact( content._id, myFormData))
      };

    return (
        <div className='adminDashboard'>
                <div className="adminSidebar">
                <Sidebar />
                </div>
           
          <div className="adminMainPage">
            <Container>
            <Row>
                
                <Col md={{ span: 6, offset: 3 }}>
                <h2 className='text-center m-4'>Contact Informantion</h2>
                {loading ? <Loader /> :(
                    <Table striped bordered hover>
                    <thead>
                        <tr>                        
                        <th>Contact Page</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <strong> Email:</strong> {content.email} </td>
                            
                        </tr>
                        <tr>
                            <td> <strong> Phone:</strong>  {content.phone}</td>
                            
                        </tr>
                        <tr>
                            <td> <strong> Address:</strong>  {content.address}</td>
                            
                        </tr>
                        <tr>
                            <td> <strong> Lesson Hour:</strong>  {content.lessonHour}</td>
                            
                        </tr>
                    </tbody>
                </Table>)}
                
                
                </Col>
                <Col md={{ span: 6, offset: 3 }}>
                <h1 className='text-center my-5'>Update Contact</h1>
                
                <form className='mb-5' onSubmit={updateFormSubmit} encType="multipart/form-data" >
                <div className="my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email</label>
                    <input type="text"
                    name="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Phone</label>
                    <input 
                    name="phone"
                    type="text"
                    value={phone} 
                    onChange={(e)=>setPhone(e.target.value)}
                    className="form-control" 
                    id="exampleInputPassword1"/>
                </div>
                <div className="my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Address</label>
                    <input type="text"
                    name="address" 
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    />
                    
                </div>
                <div className="my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Lesson Hour</label>
                    <input type="text"
                    name="lessonHour" 
                    value={lessonHour}
                    onChange={(e)=>setLessonHour(e.target.value)}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    />
                    
                </div>
                
                <button type="submit" className="changeBtn m-4 rounded">Update Now</button>
                
                </form>
        </Col>
                
            </Row>
                       
            </Container>
              </div>         
          </div>
    )
}

export default ContactUpdatePage
