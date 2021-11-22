import React from 'react'
import './Features.css'
import carSupport from '../../assets/images/feature/feature-1.png'
import drivingIns from '../../assets/images/feature/feature-2.png'
import testDrive from '../../assets/images/feature/feature-3.png'
import { useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'

const Features = () => {
    const {loading,feature}  = useSelector((state)=>state.feature)
    
    return (
        <>
        {loading ? <Loader/> : (<section className="feature">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="feature__text">
                        <div className="section-title">
                            <span> {feature.title} </span>
                            <h2>{feature.subtitle}</h2>
                        </div>
                        <p>{feature.description} </p>
                       <Link to='/courses'> <button href="/" className="feature-btn">See Courses</button></Link>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="feature__item">
                                <img src={carSupport} alt=""/>
                                <h5>Unlimited Car Support</h5>
                            </div>
                            <div className="feature__item">
                                <img src={drivingIns} alt=""/>
                                <h5>Driving School Insures</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="feature__item right-column">
                                <img src={testDrive} alt=""/>
                                <h5>Any Time Any Location</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)}
        </>
    )
}

export default Features
