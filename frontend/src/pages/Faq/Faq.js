import React, { useEffect } from 'react'
import {Accordion} from 'react-bootstrap'
import {clearErrors, getFaq} from '../../actions/faqAction'
import { useSelector, useDispatch} from 'react-redux'
import Loader from '../../components/Loader/Loader'
import {useAlert} from 'react-alert'
import {Link} from 'react-router-dom'
import './Faq.css'

const Faq = () => {
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
        <>
        <section className="faq">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="faq__accordion">
                        <div className="section-title">
                            <span>customer support</span>
                            <h2>Frequently asked questions</h2>
                        </div>
                        {loading ? <Loader /> : (
                            <Accordion defaultActiveKey="0" flush>
                            {faqs && faqs.map((item)=>(
                                <Accordion.Item key={item._id} eventKey={item.eventKey}>
                                <Accordion.Header>

                                    <h5> {item.question} </h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                {item.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                            ))}                       
                                                   
                            </Accordion>
                        )}

                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="faq__form">
                        <div className="section-title">
                            <span>ADD Question</span>
                            <h2>Have a question</h2>
                        </div>
                        <form action="">
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Website"/>
                            <textarea className='textarea' placeholder="Question"></textarea>
                          <Link to='/faq'>  <button type="submit" className="site-btn">Send Question</button></Link> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
            
        </>
    )
}

export default Faq
