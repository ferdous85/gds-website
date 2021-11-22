import React, { useEffect } from 'react'
import './IndividualFees.css'
import { FcMindMap, FcProcess } from "react-icons/fc";
import {clearErrors, getIndFees, getQuickTestFees} from '../../actions/indfeesAction'
import { useSelector, useDispatch} from 'react-redux'
import Loader from '../../components/Loader/Loader'
import { Link } from 'react-router-dom'
import {useAlert} from 'react-alert'

const IndividualFees = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const {loading,error,fees}  = useSelector((state)=>state.indfees)
    const {loading:qLoading,error:qError,qfees}  = useSelector((state)=>state.quickTest)

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
    }, [dispatch,error,qError,alert])
    

    return (
        <>
            <section className="team team--instructor spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title center-title">
                        <span>Get Special Offers</span>
                        <h2>Individual Fees</h2>
                    </div>
                </div>
            </div>
            {loading ? <Loader /> : (<div className="row">
                
                {fees && fees.map((item)=>(
                <div key={item._id} className="col-lg-6">
                    <div className="team__item">
                        <div className="team__item__img">
                        <FcMindMap />
                        </div>
                        <div className="team__item__text">
                            <h5> {item.name} </h5>
                            <span>$ {item.price}</span>
                            <p>{item.description}</p>
                            <div className="team__item__social">
                            <Link to="/">Contact Us For Booking</Link>
                            </div>
                        </div>
                    </div>
                </div>))}
                
            </div>)}
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title center-title">
                        <span>Get Special Offers</span>
                        <h2>Quick Road Test</h2>
                    </div>
                </div>
            </div>
            {qLoading ? <Loader /> : ( <div className="row">
            
                {qfees && qfees.map((item)=>(
                    <div key={item._id} className="col-lg-6">
                    <div className="team__item">
                        <div className="team__item__img">
                            <FcProcess />
                        </div>
                        <div className="team__item__text">
                            <h5>{item.name} </h5>
                            <span>$ {item.price}</span>
                            <p> {item.description} </p>
                            <div className="team__item__social">
                            <Link to="/">Contact Us For Booking</Link>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                
                
            </div>)}
        </div>
    </section>
        </>
    )
}

export default IndividualFees
