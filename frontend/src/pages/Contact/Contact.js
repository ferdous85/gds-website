import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../components/Loader/Loader'
import {useAlert} from 'react-alert'
import { getAllContact } from '../../actions/contactAction'
import './Contact.css'
import {Link} from 'react-router-dom'

const Contact = () => {

    const alert = useAlert()
    const dispatch = useDispatch()
    const { loading, error, content} = useSelector((state)=>state.allContact)
    
    useEffect(() => {
        if(error) {
            alert.error(error)
             }

        dispatch(getAllContact())

    }, [dispatch, error, alert])


    return (
        <>
        <section className="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    {loading ? <Loader /> : (
                        <div className="contact__address">
                        <h4>Contact info</h4>
                        <ul>
                            <li>
                                <div className="icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <p><span> {content.email} </span><span> {content.phone} </span></p>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <p> {content.address} </p>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fa fa-clock"></i>
                                </div>
                                <p><span>Everyday 10:00am to 7:00pm</span>
                                <span>{content.lessonHour}</span>
                                <span>7:00am to 5:00Pm(Nov to Feb)</span>

                                    </p>
                            </li>
                        </ul>
                    </div>
                    )}
                </div>
                <div className="col-lg-8 col-md-8">
                    <div className="contact__form">
                        <h4>Leave a message</h4>
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Email"/>
                                </div>
                            </div>
                            <textarea placeholder="Your message"></textarea>
                          <Link to='/contact'>  <button type="submit" className="site-btn">Ask us anything ?</button> </Link>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
            
        </>
    )
}

export default Contact
