import React from 'react'
import {Carousel} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HeroArea.css'


const HeroArea = ({contents}) => {
    
    return (
        <>
        
             <Carousel>
             {
                contents && contents.map((content)=>(
                        <Carousel.Item key={content._id}>
                            <img
                            style={{width:"1200px", height:"700px"}}
                            className="d-block w-100"
                            src={content.image.url}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <div className="hero__text">
                                    <h5>{content.title}</h5>
                                    <h2>{content.subtitle}</h2>
                                    <Link to="/contact" className="hero-btn">Contact us</Link>
                                    <Link to="/courses" className="hero-btn second-bg">See Courses</Link>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
                
                </Carousel>

            
        </>
    )
}

export default HeroArea
