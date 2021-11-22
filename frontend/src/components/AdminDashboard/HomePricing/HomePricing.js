import React, { useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import {getPricingContent} from '../../../actions/homeAction'
import {useAlert} from 'react-alert'
import { Link } from 'react-router-dom'


const HomePricing = () => {
    const alert = useAlert()
    const dispatch = useDispatch()

    const {loading, error,pricings} = useSelector((state)=>state.homePricings)

    useEffect(() => {
        if(error) {
            return alert.error(error)
        }
        
        dispatch(getPricingContent())
    }, [dispatch, error,alert])

    return (
        <>
           {loading ? <Loader /> : (<Container>
               <h2 className='text-center'>Home Pricing</h2>
               <Row>
               
                   {pricings && pricings.map((item)=>(
                   <Col key={item._id} className=' text-center m-5'>
                   <Table striped bordered hover>
                    <thead>
                        <tr>                        
                        <th> {item.packageName} </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{item.discount} </td>
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
                    <Link to={`/pricing/${item._id}`} ><button className='changeBtn rounded'>Change</button></Link>
                   </Col>))}
               </Row>
              </Container> )}
        </>
    )
}

export default HomePricing
