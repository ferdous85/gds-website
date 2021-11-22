import React, { useEffect } from 'react'
import './SixHrClass.css'
import {Carousel} from 'react-bootstrap'
import { FaStar, FaCheckCircle } from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../components/Loader/Loader'
import {useAlert} from 'react-alert'
import { getOnclsSixDetail } from '../../actions/onclsAction'
import {getAllSixImg} from '../../actions/siximgAction'
import {Link} from 'react-router-dom'



const SixHrClass = () => {

    const alert = useAlert()
    const dispatch = useDispatch()
    const { loading, error, oncls} = useSelector((state)=>state.singleOncls)
    const { loading:imgLoading, error:imgError, sixContent} = useSelector((state)=>state.allSiximg)
    
    useEffect(() => {
        if(error) {
           alert.error(error)}
           if(imgError) {
            alert.error(imgError)}

        dispatch(getOnclsSixDetail())
        dispatch(getAllSixImg())

    }, [dispatch,imgError, error, alert])

    return (
        <>
           <section className="course-details spad">
        <div className="container">
        {loading ? <Loader /> :(
            <div className="row">
            
                <div className="col-lg-8">
                    <div className="course__details__desc">
                    {imgLoading ? <Loader /> : ( <Carousel fade>
                    
                    {sixContent && sixContent.map((item)=>(
                        <Carousel.Item key={item._id}>
                        <img
                        className="d-block w-100"
                        src={item.image.url}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    ))}
                
                </Carousel>)}
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="course__details__title">
                                    <h3>{oncls.name}</h3>
                                    <div className="price">$ {oncls.price}</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="course__details__rating">
                                    <div className="rating">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="course__details__text">{oncls.description}</p>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-md-3 col-sm-6">
                                <div className="course__details__feature">
                                    <h5>Programs Available</h5>
                                    <ul>
                                        <li><FaCheckCircle className="faIcon"/> <span>{oncls.opOne}</span></li>
                                        <li><FaCheckCircle className="faIcon"/> <span>{oncls.opTwo}</span></li>
                                        <li><FaCheckCircle className="faIcon"/> <span>{oncls.opThree}</span></li>
                                        <li><FaCheckCircle className="faIcon"/> <span>{oncls.opFour}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-md-3 col-sm-6">
                                <div className="course__details__feature">
                                    <h5>Eligibility Requirements</h5>
                                    <ul>
                                        <li><FaCheckCircle className="faIcon"/> <span>{oncls.rqOne}</span></li>
                                        <li><FaCheckCircle className="faIcon"/> <span>{oncls.rqTwo}</span></li>
                                        <li><FaCheckCircle className="faIcon"/> <span>{oncls.rqThree}</span></li>
                                        <li><FaCheckCircle className="faIcon"/> <span>{oncls.rqFour}</span></li>
                                        <li><FaCheckCircle className="faIcon"/> <span>{oncls.rqFive}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="course__details__sidebar">
                        <div className="course__details__sidebar__location">
                            <div className="course__details__location__map">
                                
                            </div>
                            <div className="course__details__location__address">
                                <h5>When & Where?</h5>
                                <p><span>Address:</span> 37-15 73rd St Suit-206,  <br />Queens, NY 11372</p>
                                <p><span>Time:</span> Everyday <br />from 6:30pm - 8:30pm</p>
                            </div>
                        </div>
                            <div className="course__details__sidebar__register">
                                <h5>REgister now</h5>
                                <form action="#">
                                    <input type="text" placeholder="Name"/>
                                    <input type="text" placeholder="Email"/>
                                    <input type="text" placeholder="Phone"/>
                                    <input type="text" placeholder="Date & time" className="datepicker_pop"/>
                                    <select>
                                        <option value="">Car type</option>
                                        <option value="">Hatchback</option>
                                        <option value="">Sedan</option>
                                        <option value="">Crossover</option>
                                    </select>
                                    <Link to='/sixhrclass'> <button type="submit" className="five-tab-btn">Register</button> </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </section>
        </>
    )
}

export default SixHrClass
