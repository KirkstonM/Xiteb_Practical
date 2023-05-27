import React, { useRef, useState } from 'react';
import './carousel.css';
import { data } from '../../data/carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import BookingWidget from '../BookingWidget/BookingWidget';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


function Carousel() {

    const [carouselData, setCarouselData] = useState(data);
    const sliderRef = useRef(null);

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        dots: true,
        appendDots: dots => (
            <div className='dotts'
                style={{
                    width: '10rem',
                    right: 0,
                    borderRadius: "10px",
                    position: 'absolute',
                    bottom: '90%',
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    }

    return (
        <>
            <section className='carousel-section'>
                <div className='carousel-container'>
                    <Slider ref={sliderRef} {...sliderSettings}>
                        {carouselData.map(item => (
                            <div className='image-container' key={item.id}>
                                <img src={item.image} alt={item.alt} className='carousel-image' />
                                <div className='titles'>
                                    <h3>{item.title}</h3>
                                    <h4>{item.description}</h4>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='btn-container'>
                        <button onClick={() => sliderRef.current.slickPrev()}>
                            <IoIosArrowBack size={25} color='white' />
                        </button>
                        <button onClick={() => sliderRef.current.slickNext()}>
                            <IoIosArrowForward size={25} color='white' />
                        </button>
                    </div>
                </div>
                <BookingWidget />

            </section>
        </>


    )
}

export default Carousel