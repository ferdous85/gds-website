import React from 'react'
import './InquiryForm.css'
import {Link} from 'react-router-dom'

const InquaryForm = () => {
    return (
        <>
            <section className="application-form courses--page spad">
                <div className="container">
                    <div className="application__form__content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="app-section-title center-title">
                                    <span>Giving Best Options For You</span>
                                    <h2>Application Form</h2>
                                </div>
                            </div>
                        </div>
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <input type="text" placeholder="Your name"/>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <input type="text" placeholder="Your Email"/>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <input type="text" placeholder="Your Phone"/>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <input type="text" className="datepicker_pop" placeholder="Date & time"/>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <select>
                                        <option value="">Courses type</option>
                                        <option value="">Safe Driving Courses</option>
                                        <option value="">Motorhome Drivers</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <select>
                                        <option value="">Car type</option>
                                        <option value="">Hatchback</option>
                                        <option value="">Sedan</option>
                                        <option value="">Crossover</option>
                                    </select>
                                </div>
                                <div className="col-lg-12 text-center">
                                   <Link to='/courses'> <button type="submit" className="app-form-btn second-bg">SEND INQUIRY</button></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InquaryForm
