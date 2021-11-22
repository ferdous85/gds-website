import React, { useEffect } from 'react'
import Features from '../../components/Feature/Features'
import HeroArea from '../../components/HeroArea/HeroArea'
import Pricing from '../../components/Pricing/Pricing'
import {getHeroContent, getFeatureContent} from '../../actions/homeAction'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../components/Loader/Loader'
import {useAlert} from 'react-alert'


const Home = () => {

    const alert = useAlert()
    const dispatch = useDispatch()
    const {loading, error,contents} = useSelector((state)=>state.contents)
    
    useEffect(() => {
        if(error) {
            return alert.error(error)
        }
        dispatch(getHeroContent())
        dispatch(getFeatureContent())
        
    }, [dispatch, error,alert])

      

    return (
        <>
        {loading ? <Loader /> :(
            <>
            <HeroArea contents={contents} />
            <Features />
            <Pricing />
            
         </>
        )}
        </>
    )
}

export default Home
