import React, { useEffect } from 'react'
import './Blog.css'
import {getAllBlog} from '../../actions/blogAction'
import { useSelector, useDispatch} from 'react-redux'
import Loader from '../../components/Loader/Loader'
import { Link } from 'react-router-dom'
import {useAlert} from 'react-alert'


const Blog = () => {

    const alert = useAlert()
    const dispatch = useDispatch()
    const {loading,error,blogs}  = useSelector((state)=>state.allBlog)

    useEffect(() => {
        if(error) {
            return alert.error(error)
        }
        dispatch(getAllBlog())
    }, [dispatch,error,alert])

    return (
        <>
           {loading ? <Loader /> :(
               <section className="blog spad">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12">
                           <div className="section-title center-title">
                               <span>Latest update</span>
                               <h2>Latest news</h2>
                           </div>
                           
                       </div>
                   </div>
                   <div className="row">
                       
                       {blogs && blogs.map((item)=>(
                            <div key={item._id} className="col-lg-4 col-md-4 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src={item.image.url} alt=""/>
                                </div>
                                <div className="blog__item__text">
                                    <span> {item.smallTitle} </span>
                                    <h5><Link to="/"> {item.title} </Link></h5>
                                    <ul>
                                        <li> {item.date} </li>
                                        
                                    </ul>
                                    <p> {item.description} </p>
                                </div>
                            </div>
                        </div>
                       ))}
                      
                       <div className="col-lg-12">
                           <div className="pagination__option">
                               <a href="/">1</a>
                               <a href="/">2</a>
                               <a href="/">3</a>
                               <a href="/">Next</a>
                           </div>
                       </div>
                       </div>
                   </div>
               </section> 
           )}
        </>
    )
}

export default Blog
