import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleOnCls, clearErrors, updatOncls} from '../../../actions/onclsAction'
import { UPDATE_ONCLS_RESET } from "../../../constants/onclsConstant";
import Loader from "../../Loader/Loader";
import Sidebar from '../Sidebar/Sidebar'



const UpdateOnCls = ({ match, history }) => {

    const dispatch = useDispatch();
    const alert = useAlert()  
    
    const { oncls, error} = useSelector((state) => state.singleOncls);


    const {
        loading,
        error: updateError,
        isUpdated,
      } = useSelector((state) => state.updateOncls);

      const [name, setName] = useState("");
        const [price, setPrice] = useState('');
        const [description, setDescription] = useState('');
        const [time, setTime] = useState('');
        const [address, setAddress] = useState('');
        const [opOne, setOpOne] = useState('');
        const [opTwo, setOpTwo] = useState('');
        const [opThree, setOpThree] = useState('');
        const [opFour, setOpFour] = useState('');
        
        const [rqOne, setRqOne] = useState('');
        const [rqTwo, setRqTwo] = useState('');
        const [rqThree, setRqThree] = useState('');
        const [rqFour, setRqFour] = useState('');
        const [rqFive, setRqFive] = useState('');

        const onclsId = match.params.id;

        useEffect(() => {
            if(oncls && oncls._id !== onclsId) {
                dispatch(getSingleOnCls(onclsId))
              } else{
                setName(oncls.name)   
                setPrice(oncls.price)   
                setDescription(oncls.description)   
                setTime(oncls.time)   
                setAddress(oncls.address)   
                setOpOne(oncls.opOne)   
                setOpTwo(oncls.opTwo)   
                setOpThree(oncls.opThree)   
                setOpFour(oncls.opFour)   
                setRqOne(oncls.rqOne)   
                setRqTwo(oncls.rqTwo)   
                setRqThree(oncls.rqThree)   
                setRqFour(oncls.rqFour)   
                setRqFive(oncls.rqFive)       
          
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
              alert.success("Online Class Updated Successfully");
              history.push("/admin/oncls");
              dispatch({ type: UPDATE_ONCLS_RESET });
            }
        
            }, [dispatch,onclsId,oncls, error, history,isUpdated,updateError, alert])

            
    const updateFormSubmit = (e) => {
        e.preventDefault();
    
        const myFormData = new FormData();
    
        myFormData.set("name", name);
        myFormData.set("price", price);
        myFormData.set("description", description);
        myFormData.set("time", time);
        myFormData.set("address", address);
        myFormData.set("opOne", opOne);
        myFormData.set("opTwo", opTwo);
        myFormData.set("opThree", opThree);
        myFormData.set("opFour", opFour);
        myFormData.set("rqOne", rqOne);
        myFormData.set("rqTwo", rqTwo);
        myFormData.set("rqThree", rqThree);
        myFormData.set("rqFour", rqFour);
        myFormData.set("rqFive", rqFive);
        dispatch(updatOncls(onclsId, myFormData))
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
          <h1 className='text-center my-5'>Update Five & Six Hours Class </h1>
          
          <form className='mb-5' onSubmit={updateFormSubmit} encType="multipart/form-data" >
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Name</label>
            <input type="text"
            name="name" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Price ( In Amount)</label>
            <input 
            name="price"
            type="number"
            value={price} 
            onChange={(e)=>setPrice(e.target.value)}
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
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Time</label>
            <input type="text"
            name="time" 
            value={time}
            onChange={(e)=>setTime(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
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
          <h3>Options</h3>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Option One</label>
            <input type="text"
            name="opOne" 
            value={opOne}
            onChange={(e)=>setOpOne(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Option Two</label>
            <input type="text"
            name="opTwo" 
            value={opTwo}
            onChange={(e)=>setOpTwo(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Option Three</label>
            <input type="text"
            name="opThree" 
            value={opThree}
            onChange={(e)=>setOpThree(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Option Four</label>
            <input type="text"
            name="opFour" 
            value={opFour}
            onChange={(e)=>setOpFour(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <h3>Requrements</h3>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Requrement One</label>
            <input type="text"
            name="rqOne" 
            value={rqOne}
            onChange={(e)=>setRqOne(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Requrement Two</label>
            <input type="text"
            name="rqTwo" 
            value={rqTwo}
            onChange={(e)=>setRqTwo(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Requrement Three</label>
            <input type="text"
            name="rqThree" 
            value={rqThree}
            onChange={(e)=>setRqThree(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Requrement Four</label>
            <input type="text"
            name="rqFour" 
            value={rqFour}
            onChange={(e)=>setRqFour(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Requrement Five</label>
            <input type="text"
            name="rqFive" 
            value={rqFive}
            onChange={(e)=>setRqFive(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <button type="submit" className="changeBtn rounded">Update Now</button>
          <Link to='/admin/oncls'> <button type="submit" className="changeBtn rounded">Cancel</button></Link>
        </form>
        </Col>
        <Col>
        
        </Col>
        
        </Row>
      </Container>
    </div>
    
      
    </div>)}
      
    </>
  )
}

export default UpdateOnCls