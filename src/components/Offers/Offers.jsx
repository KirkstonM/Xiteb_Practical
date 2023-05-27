import React, { useState } from 'react';
import './offers.css';
import { data } from '../../data/offers';
import { Container, Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import image1 from '../../assets/images/offers_component/offer-parallax-img.jpg';


function Offers() {

    const [offersData, setOffersData] = useState(data);
    console.log(offersData.length)

    return (
        <>
            <section className='offer-section p-5'>
                <Container>
                    <div className='header-section mb-5'>
                        <h1> Offers </h1>
                    </div>
                    <div className='offercards'>
                        <Row className='gy-4'>
                            {
                                offersData.slice(0, 3).map(item => (
                                    <Col sm='12' xl='4' md='6'>
                                        <div className='offer-container'>
                                            <img src={item.img} alt={item.alt} className='offer-images' />
                                            <span>{item.section}</span>
                                            <div className='offer-title my-4'>
                                                {item.title}
                                            </div>
                                            <div className='offer-desc px-4 mb-5'>
                                                {item.description}
                                            </div>
                                            <div className='offer-price mb-3'>
                                                From LKR <span>{item.price}</span> Average Per Night
                                            </div>
                                            <button className='mb-5'> View Details </button>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </Container>
            </section>

            <div>
                <Parallax bgImage={image1} strength={800} className='image'>

                </Parallax>
            </div>
        </>
    )
}

export default Offers