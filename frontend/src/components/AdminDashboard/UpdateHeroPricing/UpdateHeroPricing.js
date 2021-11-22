import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSinglePriceDetails, clearErrors, updateHeroPricing} from '../../../actions/homeAction'
import {UPDATE_PRICING_RESET} from '../../../constants/homeConstant'
import Loader from "../../Loader/Loader";
import Sidebar from '../Sidebar/Sidebar'




const UpdateHeroPricing = ({ match, history }) => {

  const dispatch = useDispatch();
  const alert = useAlert()  

  const { error, pricing } = useSelector((state) => state.singleHomePricing);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.updateHomePricing);

  

  const [discount, setDiscount] = useState("");
  const [pricingAmount, setPricingAmount] = useState('');
  const [packageName, setPackageName] = useState('');
  const [packageLength, setPackageLength] = useState('');
  const [cerName, setCerName] = useState('');
  const [packageApt, setPackageApt] = useState('');
  const [carRental, setCarRental] = useState('');
  const [roadTest, setRoadTest] = useState('');

  const pricingId = match.params.id;

  useEffect(() => {
    if(pricing && pricing._id !== pricingId) {
      dispatch(getSinglePriceDetails(pricingId))
    } else{
      setDiscount(pricing.discount);
      setPricingAmount(pricing.pricingAmount);
      setPackageName(pricing.packageName);
      setPackageLength(pricing.packageLength);
      setCerName(pricing.cerName);
      setPackageApt(pricing.packageApt);
      setCarRental(pricing.carRental);
      setRoadTest(pricing.roadTest)

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
      alert.success("Pricing Updated Successfully");
      history.push("/admin/homePage");
      dispatch({ type: UPDATE_PRICING_RESET });
    }

    }, [dispatch,pricingId, error, pricing, history,isUpdated,updateError, alert])
  

    const updateFormSubmit = (e) => {
      e.preventDefault();
  
      const myFormData = new FormData();
  
      myFormData.set("discount", discount);
      myFormData.set("pricingAmount", pricingAmount);
      myFormData.set("packageName", packageName);
      myFormData.set("packageLength", packageLength);
      myFormData.set("cerName", cerName);
      myFormData.set("packageApt", packageApt);
      myFormData.set("carRental", carRental);
      myFormData.set("roadTest", roadTest);
      dispatch(updateHeroPricing(pricingId, myFormData))
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
          <h1 className='text-center my-5'>Update Hero Pricing</h1>
          
          <form className='mb-5' onSubmit={updateFormSubmit} encType="multipart/form-data" >
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Discount</label>
            <input type="text"
            name="discount" 
            value={discount}
            onChange={(e)=>setDiscount(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Price ( In Amount)</label>
            <input 
            name="pricingAmount"
            type="number"
            value={pricingAmount} 
            onChange={(e)=>setPricingAmount(e.target.value)}
            className="form-control" 
            id="exampleInputPassword1"/>
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Package Name</label>
            <input type="text"
            name="packageName" 
            value={packageName}
            onChange={(e)=>setPackageName(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Package Length</label>
            <input type="text"
            name="packageLength" 
            value={packageLength}
            onChange={(e)=>setPackageLength(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Certificate Name</label>
            <input type="text"
            name="cerName" 
            value={cerName}
            onChange={(e)=>setCerName(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Test Appointment</label>
            <input type="text"
            name="packageApt" 
            value={packageApt}
            onChange={(e)=>setPackageApt(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Car Rental</label>
            <input type="text"
            name="carRental" 
            value={carRental}
            onChange={(e)=>setCarRental(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            />
            
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Road Test Location</label>
            <input type="text"
            name="roadTest" 
            value={roadTest}
            onChange={(e)=>setRoadTest(e.target.value)}
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

export default UpdateHeroPricing