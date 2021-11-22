import React, { useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {useAlert} from 'react-alert'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getFaq, clearErrors } from '../../../actions/faqAction'


const FaqPage = () => {

    const alert = useAlert()
    const dispatch = useDispatch()
    const {loading,error,faqs}  = useSelector((state)=>state.allFaq)
    

    useEffect(() => {
        if(error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        dispatch(getFaq())
       
    }, [dispatch,error,alert])

    return (
        <div className='adminDashboard'>
                <div className="adminSidebar">
                <Sidebar />
                </div>           
          <div className="adminMainPage">
            <Container>
            <Row>                
            {loading ? <Loader /> :( <Col md={{ span: 6, offset: 3 }}>
                <h2 className='text-center m-4'>FAQ List</h2>                
                    <Table striped bordered hover>
                    <thead>
                        <tr>                        
                        <th>Question</th>                        
                        <th>Answer</th>                                           
                        <th>Action</th>                        
                        </tr>
                    </thead>
                    {faqs && faqs.map((item)=>(<tbody key={item._id}>
                        <tr>
                            <td> {item.question} </td>
                            <td> {item.answer} </td>
                            <td> <Link className='changeBtn rounded' to={`/faq/${item._id}`}>Change</Link> </td>
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

export default FaqPage
