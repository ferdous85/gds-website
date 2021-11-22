import React, { useEffect } from 'react'
import './CoursesTab.css'
import {getAllCourse} from '../../actions/courseAction'
import { useSelector, useDispatch} from 'react-redux'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
import {useAlert} from 'react-alert'

const CoursesTab = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const {loading,error,courses}  = useSelector((state)=>state.courses)

    useEffect(() => {
        if(error) {
            return alert.error(error)
        }
        dispatch(getAllCourse())
    }, [dispatch,error,alert])
    
    return (
        <>
           {loading ? <Loader /> : (<section className="courses">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="section-title">
                                <span>Flexible Courses</span>
                                <h2>Our Courses</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="courses__all">
                                <Link to="/" className="course-tab-btn">View all</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                     
                        {courses && courses.map((item)=>(<div key={item._id} className="col-lg-4 col-md-4 col-sm-6">
                            <div  className="course__item">
                                <img src={item.image.url} alt=""/>
                                <h5>{item.name}</h5>
                                <h4>$ {item.price}</h4>
                                <p>{item.description}</p>
                                <Link className='link' to="/">View detail</Link>
                            </div>
                        </div>))}
                    </div>
                </div>
            </section> )}
        </>
    )
}

export default CoursesTab
