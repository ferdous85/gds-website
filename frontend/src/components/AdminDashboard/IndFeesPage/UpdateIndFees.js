import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIndFeesDetails, clearErrors, updateSingleIndFees} from '../../../actions/indfeesAction'
import {UPDATE_INDFEES_RESET} from '../../../constants/indFeesConstant'
import Loader from "../../Loader/Loader";
import Sidebar from '../Sidebar/Sidebar'


const UpdateIndFees = ({ match, history }) => {

  const dispatch = useDispatch();
  const alert = useAlert()  
  
  const {fee, error} = useSelector((state) => state.singleIndfees);


  const {
      loading,
      error: updateError,
      isUpdated,
    } = useSelector((state) => state.updateIndfees);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
      const [description, setDescription] = useState('');
      

      const feeId = match.params.id;

      useEffect(() => {
          if(fee && fee._id !== feeId) {
              dispatch(getIndFeesDetails(feeId))
            } else{
              setName(fee.name);
              setPrice(fee.price);
              setDescription(fee.description);
        
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
            alert.success("Individual Fees Updated Successfully");
            history.push("/admin/indfees");
            dispatch({ type: UPDATE_INDFEES_RESET });
          }
      
          }, [dispatch,feeId,fee, error, history,isUpdated,updateError, alert])

          
  const updateFormSubmit = (e) => {
      e.preventDefault();
  
      const myFormData = new FormData();
  
      myFormData.set("name", name);
      myFormData.set("price", price);
      myFormData.set("description", description);
      dispatch(updateSingleIndFees(feeId, myFormData))
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
        <h1 className='text-center my-5'>Update Individual Fees</h1>
        
        <form className='mb-5' onSubmit={updateFormSubmit} encType="multipart/form-data" >
        <div className="my-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Individual Fees Name</label>
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
        
        
        
        
        <button type="submit" className="changeBtn rounded">Update Now</button>
        <Link to='/admin/indfees'> <button type="submit" className="changeBtn rounded">Cancel</button></Link>
      </form>
      </Col>
      
      </Row>
    </Container>
  </div>
  
    
  </div>)}
    
  </>
)
}

export default UpdateIndFees