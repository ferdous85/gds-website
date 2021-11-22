import React, { useEffect } from 'react'
import './Pricing.css'
import Loader from '../Loader/Loader';
import {useDispatch, useSelector} from 'react-redux'
import {useAlert} from 'react-alert'
import { getPricingContent} from '../../actions/homeAction'
import { Link } from 'react-router-dom';

const Pricing = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const {pricings, loading, error}  = useSelector((state)=>state.homePricings)

    useEffect(() => {
        if(error) {
            return alert.error(error)
        }
        
        dispatch(getPricingContent())
    }, [dispatch, error,alert])
    return (
        <>
        {loading ? <Loader /> :(<section className="pricing">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="prc-section-title">
                        <span>Get Special Offer</span>
                        <h2>Our Pricing</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {pricings && pricings.map((item)=>(<div key={item._id} className="col-lg-4 col-md-6 col-sm-6">
                    <div className="pricing__item">
                        <div className="pricing__item__title">
                            <span> {item.discount} </span>
                            <h2> $ {item.pricingAmount} </h2>
                            <h5>{item.packageName} </h5>
                        </div>
                        <ul>
                            <li> {item.packageLength} </li>
                            <li> {item.cerName} </li>
                            <li> {item.packageApt} </li>
                            <li> {item.carRental} </li>
                            <li> {item.roadTest} </li>
                        </ul>
                        <Link to="/" className="prc-primary-btn second-bg">get Started</Link>
                    </div>
                </div>))}
                
               
            </div>
        </div>
    </section>)}
        </>
    )
}

export default Pricing
