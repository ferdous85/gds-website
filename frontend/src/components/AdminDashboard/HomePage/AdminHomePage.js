import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { getHeroContent, getFeatureContent, clearErrors, updateHeroFeature } from '../../../actions/homeAction'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {useAlert} from 'react-alert'
import './AdminHomePage.css'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HomePricing from '../HomePricing/HomePricing'



const AdminHomePage = ({history}) => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const { loading, error, contents} = useSelector((state)=>state.contents)

    const { isAuthenticated} = useSelector((state)=>state.user)

    const { success} = useSelector((state)=>state.newHeroContent)
    const { feature, loading:featureLoading} = useSelector((state)=>state.feature)

    const { error:updateError, loading:updateLoading, isUpdated } = useSelector((state) => state.updateFeature);

    const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {      
    dispatch(getFeatureContent())
  }, [dispatch])


    useEffect(() => {

        if (feature ) {
            setTitle(feature.title)
            setSubtitle(feature.subtitle)
            setDescription(feature.description)                    
            } 

        if(error) {
            return alert.error(error)
             }
        if (success) {
            alert.success("Hero Content Created Successfully");
            history.push("/admin/homePage");
        
              }

              if (isUpdated) {
                alert.success("Feature Updated Successfully");
                
                setTitle('')
                setSubtitle('')
                setDescription('')
              }

              if (updateError) {
                alert.error(updateError);
                dispatch(clearErrors());
              }

        if (isAuthenticated === false) {
            history.push("/login");
          }
        dispatch(getHeroContent())
    }, [dispatch, error,feature,alert,updateError,isUpdated, history,success, isAuthenticated])
   
    const updateFormSubmit = (e) => {
        e.preventDefault();
    
        const myFormData = new FormData();
    
        myFormData.set("title", title);
        myFormData.set("subtitle", subtitle);
        myFormData.set("description", description);
        
        dispatch(updateHeroFeature( feature._id, myFormData))
      };
   
   
    return (
        <>
        {loading ? <Loader /> :(
            <div className='adminDashboard'>
                <div className="adminSidebar">
                <Sidebar />
                </div>
           
          <div className="adminMainPage">
            <Container>
            <Row>
                <Col>
                    <h2 className='text-center m-4'>Hero Area Content</h2>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        
                        <th>Title</th>
                        <th>Sub Title</th>
                        <th>Image</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contents && contents.map((content)=>(
                            <tr key={content._id}>
                            <td>{content.title}</td>
                            <td>{content.subtitle}</td>
                            <td>
                                <img className='heroImage' src={content.image.url} alt="Preview" />
                            </td>
                            <td>
                                <Link className='changeBtn rounded' to={`/herobg/${content._id}`} >Change</Link>
                                
                            </td>
                            </tr>
                        ))}
                        
                    </tbody>
                    </Table>
                    
                </Col>
                <Col>
                <h2 className='text-center m-4'>Hero Feature Area</h2>
                {featureLoading ? <Loader /> : (<>
                    <Table striped bordered hover>
                    <thead>
                        <tr>                        
                        <th>Feature</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <strong> Title:</strong> {feature.title}</td>
                            
                        </tr>
                        <tr>
                            <td> <strong> Sub Title:</strong> {feature.subtitle}</td>
                            
                        </tr>
                        <tr>
                            <td> <strong> Description:</strong> {feature.description}</td>
                            
                        </tr>
                    </tbody>
                </Table>
                
                </>
                )}
                <h1 className='text-center my-5'>Update Feature</h1>
                
                {updateLoading ? <Loader /> : (
                    <form className='mb-5' onSubmit={updateFormSubmit} encType="multipart/form-data" >
                    <div className="my-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Title</label>
                        <input type="text"
                        name="title" 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Sub Title</label>
                        <input 
                        name="subtitle"
                        type="text"
                        value={subtitle} 
                        onChange={(e)=>setSubtitle(e.target.value)}
                        className="form-control" 
                        id="exampleInputPassword1"/>
                    </div>
                    <div className="my-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Address</label>
                        <input type="text"
                        name="description" 
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        />
                        
                    </div>
                    
                    
                    <button type="submit" className="changeBtn m-4 rounded">Update Now</button>
                    
    
                    </form>
                )}

                </Col>
                
            </Row>
            <Row>
                
                <HomePricing />
                
            </Row>
            
            </Container>
              </div>         
          </div>
        )}          
        </>
    )
}

export default AdminHomePage
