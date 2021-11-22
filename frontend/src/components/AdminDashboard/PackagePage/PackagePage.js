import React, { useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { getPackage, clearErrors } from '../../../actions/packageAction'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {useAlert} from 'react-alert'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PackagePage = () => {

    const alert = useAlert()
    const dispatch = useDispatch()
    const {loading, error, packages} = useSelector((state)=>state.packages)
    
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
          }
        dispatch(getPackage())
               
    }, [dispatch,error, alert])


    return (
        <div className='adminDashboard'>
                <div className="adminSidebar">
                <Sidebar />
                </div>           
          <div className="adminMainPage">
           {loading ? <Loader /> : (<Container>
               <h2 className='text-center'>Home Pricing</h2>
               <Row>
               
                   {packages && packages.map((item)=>(
                  
                   <Col key={item._id} xs={6} md={3} className=' text-center m-5'>
                   <Table   striped bordered hover>
                    <thead>
                        <tr>                        
                        <th> {item.packageName} </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{item.discount} % Off </td>
                        </tr>
                        <tr>
                        <td> $ {item.pricingAmount} </td>
                        </tr>
                        <tr>
                        <td> {item.packageLength} </td>
                        </tr>
                        <tr>
                        <td> {item.cerName} </td>
                        </tr>
                        <tr>
                        <td> {item.packageApt} </td>
                        </tr>

                        <tr>
                        <td> {item.carRental} </td>
                        </tr>

                        <tr>
                        <td> {item.roadTest} </td>
                        </tr>
                        
                    </tbody>
                    </Table>
                    <Link to={`/package/${item._id}`} ><button className='changeBtn rounded'>Change</button></Link>
                    </Col>
                   
                   ))}
                   
               </Row>
              </Container> )}
        </div>
        </div>
    )
}

export default PackagePage
