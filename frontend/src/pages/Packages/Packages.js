import React, { useEffect } from 'react'
import Loader from '../../components/Loader/Loader'
import {useAlert} from 'react-alert'
import {getPackage} from '../../actions/packageAction'
import {useDispatch, useSelector} from 'react-redux'
import './Packages.css'
import { Link } from 'react-router-dom'

const Packages = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const {loading, packages} = useSelector((state)=>state.packages)
    
    useEffect(() => {
        
        dispatch(getPackage())
               
    }, [dispatch, alert])
    return (
        <>
        {loading ? <Loader /> :(<section className="package">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="package-title">
                        <span>Get Special Offer</span>
                        <h2>Our Packages</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                
                {packages && packages.map((item)=>(
                <div key={item._id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="package__item">
                        <div className="package__item__title">
                            <span>{item.discount} % off</span>
                            <h2>$ {item.pricingAmount}</h2>
                            <h5> {item.packageName} </h5>
                        </div>
                        <ul>
                            <li> {item.packageLength} </li>
                            <li> {item.cerName} </li>
                            <li> {item.packageApt} </li>
                            <li>{item.carRental}</li>
                            <li>{item.roadTest}</li>
                        </ul>
                        <Link to="/" className="package-btn">get Started</Link>
                    </div>
                </div>))}
            </div>
        </div>
    </section>)}
        </>
    )
}

export default Packages
