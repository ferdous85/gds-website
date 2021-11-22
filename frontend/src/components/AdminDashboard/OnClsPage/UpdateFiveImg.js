import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {useAlert} from 'react-alert'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {getSingleFiveImg, updateFiveImg, clearErrors } from '../../../actions/fiveimgAction'
import {UPDATE_FIVEIMG_RESET} from '../../../constants/fiveimgContant'



const UpdateFiveImg = ({ match, history }) => {
    const dispatch = useDispatch();
    const alert = useAlert()  
  
    const { loading,error, content } = useSelector((state) => state.singleFiveimg);

    const {
        
        error: updateError,
        isUpdated,
      } = useSelector((state) => state.updateFiveimg);

        
        const [image, setImage] = useState();
        const [imagePreview, setImagePreview] = useState();

        const contentId = match.params.id;
        
        useEffect(() => {
            if(content && content._id !== contentId) {
              dispatch(getSingleFiveImg(contentId))
            } else{
              
              setImagePreview(content.image.url)
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
              alert.success("Image Updated Successfully");
              history.push("/admin/oncls");
              dispatch({ type: UPDATE_FIVEIMG_RESET });
            }
        
            }, [dispatch,content, error, contentId, history,isUpdated,updateError, alert])
          
            const updateFormSubmit = (e) => {
                e.preventDefault();

                const myFormData = new FormData();
            
                myFormData.set("image", image);
                dispatch(updateFiveImg(contentId, myFormData))
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
                <h1 className='text-center my-5'>Update {content.name}</h1>
                {loading ? <Loader /> : (
                  <img style={{width:"700px", height:"400px"}} className='overflow-hidden' src={imagePreview} alt=""  />
                )}
                <form className='mb-5' onSubmit={updateFormSubmit} encType="multipart/form-data" >
                
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
                <Link to='/admin/oncls'> <button type="submit" className="changeBtn rounded">Cancel</button></Link>
                </form>
                </Col>
                
                </Row>
            </Container>
            </div>
    
            
                </div>)}
            
            </>
            )
        }

export default UpdateFiveImg
