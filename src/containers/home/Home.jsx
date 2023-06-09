import React from 'react'
import './home.css'
import BottomRight from '../../assets/icons/vectors/Vector-1.svg'
import TopLeft from '../../assets/icons/vectors/Vector-2.svg'
import TopRight from '../../assets/icons/vectors/Vector-3.svg'
import BottomLeft from '../../assets/icons/vectors/Vector.svg'
import {Navbar} from '../../components'


const Home = () => {

    return (
        <div className='verseify__home'>
            <Navbar/>
        <div className="verseify__home section__padding" id="home">
            
            <div className="verseify__home-content">
                <h1 className="gradient__text">Access Free Fan Translations</h1>
                <p>Our website provides you with easy access to a wide selection of
                    fan-translated books for free. Whether you're a fan of manga, light novels, or
                    other types of literature, our collection has something for everyone. With just
                    a few clicks, you can access our extensive library of fan-translated content and
                    enjoy your favorite books without any cost. Our website is user-friendly and
                    regularly updated with new fan translations, so you'll never run out of reading
                    material. Browse our collection today and start exploring the world of fan
                    translations!</p>
            </div>
            <div className="verseify__home-content__input">
                <button type="button">Start Reading Now</button>
            </div>
            <div className='verseify__home-content__image'>
                <img src={BottomRight} className="square-bottom-right" alt=""/>
                <img src={TopLeft} className="square-top-left" alt=""/>
                <img src={TopRight} className="square-top-right" alt=""/>
                <img src={BottomLeft} className="square-bottom-left" alt=""/>
            </div>
        </div>
        </div>
    )
}

export default Home