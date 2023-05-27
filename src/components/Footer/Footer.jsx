import React from 'react';
import './footer.css';
import { Row, Col, Container } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { currentMode } from '../../features/modeSlice';



function Footer() {

  const mode = useSelector(currentMode);
  return (
    <footer>
      <div className={`footer-bg ${mode === "dark" ? 'dark' : ''}`}> </div>
      <Container>
        <div className='footer-section pb-5'>
          <div className='scroll-icon'>
            <a href='#homestarter'> Scroll Up </a>
          </div>
          <Row>
            <Col sm='12' xl='3' md='3'>
              <div className='col-header'>
                About
              </div>
              <div className='links'>
                <a href='#'> About Cinnamon Hotels & Resorts </a>
                <a href='#'> Media & Accolades </a>
                <a href='#'> Gallery </a>
                <a href='#'> CSR & Sustainability </a>
                <a href='#'> John Keells Group </a>
                <a href='#'> Cinnamon Air </a>
                <a href='#'> Nature Trails </a>
                <a href='#'> Cinnamon Box Office </a>
                <a href='#'> Terms & Conditions </a>
                <a href='#'> Privacy Statement </a>
              </div>
            </Col>

            <Col>
              <div className='col-header'>
                Get In Touch
              </div>
              <div className='links'>
                <a href='#'> Know Sri Lanka </a>
                <a href='#'> Know Maldives </a>
                <a href='#'> Contact Us </a>
              </div>

              <Col >
                <div className='col-header'>
                  Sections
                </div>
                <div className='links'>
                  <a href='#'> Careers </a>
                  <a href='#'> Blog </a>
                  <a href='#'> Cinnamon Affiliate Programme </a>
                </div>
              </Col>
            </Col>


            <Col >
              <div className='col-header'>
                Follow Us
              </div>
              <div className='social-links'>
                <a href='#'> <FaFacebookF /> </a>
                <a href='#'> <FaTwitter /> </a>
                <a href='#'> <FaLinkedinIn /> </a>
                <a href='#'> <AiFillInstagram /> </a>
                <a href='#'> <FaYoutube /> </a>
              </div>

              <Col>
                <div className='contact-tab mt-4'>
                  <div className='col-header mb-4'>
                    Your Inbox
                  </div>
                  <div className='email-form d-flex'>
                    <input type='text' placeholder='Email Address' />
                    <button> <RiSendPlaneFill /> </button>
                  </div>
                  <div className='terms'>
                    <input type='radio' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi officia dignissimos, mollitia iusto molestias! Eos fugiat non in officiis excepturi tenetur iure, laudantium mollitia vero aperiam, minima vitae suscipit.</p>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default Footer