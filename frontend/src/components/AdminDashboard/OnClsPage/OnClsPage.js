import React, { useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { getAllOnCls, clearErrors } from '../../../actions/onclsAction'
import { getAllFiveImg} from '../../../actions/fiveimgAction'
import { getAllSixImg} from '../../../actions/siximgAction'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {useAlert} from 'react-alert'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OnClsPage = () => {

    const alert = useAlert()
    const dispatch = useDispatch()
    const {loading, error, oncls} = useSelector((state)=>state.allOncls)
    const { loading:imgLoading, error:imgError, imgContent} = useSelector((state)=>state.allFiveimg)
    const { loading:sixLoading, error:sixError, sixContent} = useSelector((state)=>state.allSiximg)
    
    useEffect(() => {
        dispatch(getAllOnCls())
        dispatch(getAllFiveImg())
        dispatch(getAllSixImg())
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
          }
          if (imgError) {
            alert.error(imgError);
            dispatch(clearErrors());
          }

          if (sixError) {
            alert.error(sixError);
            dispatch(clearErrors());
          }
               
    }, [dispatch,imgError,sixError,error, alert])

    return (
        <div className='adminDashboard'>
                <div className="adminSidebar">
                <Sidebar />
                </div>           
          <div className="adminMainPage">
           {loading ? <Loader /> : (<Container>
               <h2 className='text-center'>Five & Six Hours Class</h2>
               <Row>
               
                   {oncls && oncls.map((item)=>(
                  
                   <Col key={item._id} xs={6} md={3} className=' text-center m-5'>
                   <Table   striped bordered hover>
                    <thead>
                        <tr>                        
                        <th> {item.name} </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>$ {item.price} </td>
                        </tr>
                        <tr>
                        <td> $ {item.description} </td>
                        </tr>
                        <tr>
                        <td> {item.time} </td>
                        </tr>
                        <tr>
                        <td> {item.opOne} </td>
                        </tr>
                        <tr>
                        <td> {item.opTwo} </td>
                        </tr>

                        <tr>
                        <td> {item.opThree} </td>
                        </tr>

                        <tr>
                        <td> {item.opFour} </td>
                        </tr>
                        <tr>
                        <td> {item.rqOne} </td>
                        </tr><tr>
                        <td> {item.rqTwo} </td>
                        </tr><tr>
                        <td> {item.rqThree} </td>
                        </tr><tr>
                        <td> {item.rqFour} </td>
                        </tr><tr>
                        <td> {item.rqFive} </td>
                        </tr>
                        
                    </tbody>
                    </Table>
                    <Link to={`/onclses/${item._id}`} ><button className='changeBtn rounded'>Change</button></Link>
                    </Col>
                   
                   ))}
                   
                   
               </Row>
               <Row>
               {imgLoading ? <Loader />:(
                       <Col>
                       {imgContent && imgContent.map((iItem)=>(
                           <div key={iItem._id} className='fiveImage'>
                               <h3> {iItem.name} </h3>
                           <img style={{width:"300px", height:"300px"}} src={iItem.image.url} alt='preview' />
                           <Link to={`/five/${iItem._id}`} ><button className='m-2 changeBtn rounded'>Change</button></Link>
                           </div>
                       ))}
                      </Col>
                   )}
               {sixLoading ? <Loader />:(
                       <Col>
                       {sixContent && sixContent.map((iItem)=>(
                           <div key={iItem._id} className='fiveImage'>
                               <h3> {iItem.name} </h3>
                           <img style={{width:"300px", height:"300px"}} src={iItem.image.url} alt='preview' />
                           <Link to={`/six/${iItem._id}`} ><button className='m-2 changeBtn rounded'>Change</button></Link>
                           </div>
                       ))}
                      </Col>
                   )}
               </Row>

              </Container> )}
        </div>
        </div>
    )
}

export default OnClsPage
