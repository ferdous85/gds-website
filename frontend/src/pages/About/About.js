import React, { useEffect } from 'react'
import './About.css'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../components/Loader/Loader'
import {useAlert} from 'react-alert'
import { getAboutHeroContent } from '../../actions/aboutAction'

const About = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const { loading, error, content} = useSelector((state)=>state.aboutContent)
    
    useEffect(() => {
        if(error) {
            alert.error(error)
             }

        dispatch(getAboutHeroContent())

    }, [dispatch, error, alert])


    return (
        <>
        {loading ? <Loader /> :(
        <section className="about-hero">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-lg-5 m-auto text-center">
                    <div className="about__hero__text">
                        <div className="section-title">
                            <span> {content.title} </span>
                            <h2> {content.subtitle} </h2>
                        </div>
                        <p> {content.description} </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
            )}
        </>
    )
}

export default About
