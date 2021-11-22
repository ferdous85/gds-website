import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSinglePackageDetails, clearErrors, updatePackage} from '../../../actions/packageAction'
import {UPDATE_PACKAGE_RESET} from '../../../constants/packageConstant'
import Loader from "../../Loader/Loader";
import Sidebar from '../Sidebar/Sidebar'



const UpdatePackage = ({ match, history }) => {

    const dispatch = useDispatch();
    const alert = useAlert()  
    
    const {content, error} = useSelector((state) => state.singlePackage);


    const {
        loading,
        error: updateError,
        isUpdated,
      } = useSelector((state) => state.updatePackage);

      const [discount, setDiscount] = useState("");
        const [pricingAmount, setPricingAmount] = useState('');
        const [packageName, setPackageName] = useState('');
        const [packageLength, setPackageLength] = useState('');
        const [cerName, setCerName] = useState('');
        const [packageApt, setPackageApt] = useState('');
        const [carRental, setCarRental] = useState('');
        const [roadTest, setRoadTest] = useState('');

        const contentId = match.params.id;

        useEffect(() => {
            if(content && content._id !== contentId) {
                dispatch(getSinglePackageDetails(contentId))
              } else{
                setDiscount(content.discount);
                setPricingAmount(content.pricingAmount);
                setPackageName(content.packageName);
                setPackageLength(content.packageLength);
                setCerName(content.cerName);
                setPackageApt(content.packageApt);
                setCarRental(content.carRental);
                setRoadTest(content.roadTest)
          
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
              alert.success("Package Updated Successfully");
              history.push("/admin/package");
              dispatch({ type: UPDATE_PACKAGE_RESET });
            }
        
            }, [dispatch,contentId,content, error, history,isUpdated,updateError, alert])

            
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
        dispatch(updatePackage(contentId, myFormData))
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
          <h1 className='text-center my-5'>Update Package</h1>
          
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
          <Link to='/admin/package'> <button type="submit" className="changeBtn rounded">Cancel</button></Link>
        </form>
        </Col>
        
        </Row>
      </Container>
    </div>
    
      
    </div>)}
      
    </>
  )
}

export default UpdatePackage