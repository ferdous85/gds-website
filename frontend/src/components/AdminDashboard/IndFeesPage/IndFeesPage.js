import React, { useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {useAlert} from 'react-alert'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getIndFees, getQuickTestFees, clearErrors } from '../../../actions/indfeesAction'



const IndFeesPage = () => {

    const alert = useAlert()
    const dispatch = useDispatch()
    const {loading,error,fees}  = useSelector((state)=>state.indfees)
    const {qfees,loading:qLoading, error:qError}  = useSelector((state)=>state.quickTest)

    useEffect(() => {
        if(error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        if(qError) {
            alert.error(qError)
            dispatch(clearErrors())
        }


        dispatch(getIndFees())
        dispatch(getQuickTestFees())
    }, [dispatch,qError,error,alert])

    return (
        <div className='adminDashboard'>
                <div className="adminSidebar">
                <Sidebar />
                </div>           
          <div className="adminMainPage">
            <Container>
            <Row>                
            {loading ? <Loader /> :( <Col md={{ span: 6, offset: 3 }}>
                <h2 className='text-center m-4'>Individual Fees List</h2>                
                    <Table striped bordered hover>
                    <thead>
                        <tr>                        
                        <th>Name</th>                        
                        <th>Price</th>                        
                        <th>Description</th>                                            
                        <th>Action</th>                        
                        </tr>
                    </thead>
                    {fees && fees.map((item)=>(<tbody key={item._id}>
                        <tr>
                            <td> {item.name} </td>
                            <td> $ {item.price} </td>
                            <td> {item.description} </td>
                            <td> <Link className='changeBtn rounded' to={`/indfees/${item._id}`}>Change</Link> </td>
                        </tr>                        
                    </tbody>))}
                </Table>
                
                
                </Col>)}
                
                
            </Row>
            <Row>
            {qLoading ? <Loader /> :(<Col md={{ span: 6, offset: 3 }}>
                <h2 className='text-center m-4'>Quick Road Test Fees</h2>                
                    <Table striped bordered hover>
                    <thead>
                        <tr>                        
                        <th>Name</th>                        
                        <th>Price</th>                        
                        <th>Description</th>                                            
                        <th>Action</th>                        
                        </tr>
                    </thead>
                    {qfees && qfees.map((item)=>(<tbody key={item._id}>
                        <tr>
                            <td> {item.name} </td>
                            <td> $ {item.price} </td>
                            <td> {item.description} </td>
                            <td> <Link className='changeBtn rounded' to={`/quicktest/${item._id}`}>Change</Link> </td>
                        </tr>                        
                    </tbody>))}
                </Table>
                
                
                </Col>)}
            </Row>

            </Container>
              </div>         
          </div>
    )
}

export default IndFeesPage
