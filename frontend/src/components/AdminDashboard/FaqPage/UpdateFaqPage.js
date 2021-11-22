import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleFaqDetails, clearErrors, updateFaq} from '../../../actions/faqAction'
import {UPDATE_FAQ_RESET} from '../../../constants/faqConstant'
import Loader from "../../Loader/Loader";
import Sidebar from '../Sidebar/Sidebar'


const UpdateFaqPage = ({ match, history }) => {

    const dispatch = useDispatch();
    const alert = useAlert()  
    
    const {loading,faq, error} = useSelector((state) => state.singleFaq);
  
  
    const {
        loading:updateLoading,
        error: updateError,
        isUpdated,
      } = useSelector((state) => state.updateFaq);
  
      const [question, setQuestion] = useState("");
      const [answer, setAnswer] = useState("");
        
  
        const faqId = match.params.id;
  
        useEffect(() => {
            if(faq && faq._id !== faqId) {
                dispatch(getSingleFaqDetails(faqId))
              } else{
                setQuestion(faq.question);
                setAnswer(faq.answer);          
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
              alert.success("FAQ Updated Successfully");
              history.push("/admin/faq");
              dispatch({ type: UPDATE_FAQ_RESET });
            }
        
            }, [dispatch,faqId,faq, error, history,isUpdated,updateError, alert])
  
            
    const updateFormSubmit = (e) => {
        e.preventDefault();
    
        const myFormData = new FormData();
    
        myFormData.set("question", question);
        myFormData.set("answer", answer);
        dispatch(updateFaq(faqId, myFormData))
      };
          
        
  
  return (
    <>
    {updateLoading ? <Loader /> :(<div className="adminDashboard">
    <div className="adminSidebar">
      <Sidebar />
    </div>
    <div className="adminMainPage">
      <Container>
        <Row>
          {loading ? <Loader /> :(
            <Col md={{ span: 6, offset: 3 }}>
            <h1 className='text-center my-5'>Update FAQ</h1>
            
            <form className='mb-5' onSubmit={updateFormSubmit} encType="multipart/form-data" >
            <div className="my-3">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Question</label>
              <input type="text"
              name="question" 
              value={question}
              onChange={(e)=>setQuestion(e.target.value)}
              className="form-control" 
              id="exampleInputEmail1" 
              />
              
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Answer</label>
              <textarea 
              name="answer"
              type="text"
              value={answer} 
              onChange={(e)=>setAnswer(e.target.value)}
              className="form-control" 
              id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="changeBtn rounded">Update Now</button>
            <Link to='/admin/faq'> <button type="submit" className="changeBtn rounded">Cancel</button></Link>
          </form>
          </Col>
          )}
        
        </Row>
      </Container>
    </div>
    
      
    </div>)}
      
    </>
  )
  }
  
  export default UpdateFaqPage