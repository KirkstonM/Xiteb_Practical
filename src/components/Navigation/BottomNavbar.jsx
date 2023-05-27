import React from 'react';
import './navigation.css';
import { Container, Col, Row, Dropdown } from 'react-bootstrap';

function BottomNavbar() {
  return (
    <>

      <section className='nav-tabs'>
        {/* FIRST SECTION */}
        <div className='home'>
          <a href='#' className='link-heading'> ABOUT </a>
          <Container className="eventsNav">
            <Row className='mx-5'>
              <Col xs="12" md="6" lg='3' className="text-left">
                <Dropdown.Header className='custom-header'>
                  About The Hotel
                </Dropdown.Header>

                <Dropdown.Item className='mb-2'>
                  <a href='#' className="nav-a" role="button">
                    Overview
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>
                  <a href='#' className="nav-a mt-5" role="button">
                    Explore Colombo
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a mt-5" role="button">
                    Services & Facilities
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Map & Directions
                  </a>

                </Dropdown.Item>
              </Col>
            </Row>
          </Container>
        </div>

        {/* END OF FIRST SECTION */}

        {/* START OF SECOND SECTION */}
        <div className='home'>
          <a href='#' className='link-heading'> ROOMS & SUITES </a>
          <Container className="eventsNav pt-0 mt-0">
            <Row className='mx-5'>
              <Col xs="12" md="6" lg='3' className="text-left">
                <Dropdown.Header className="custom-header">
                  Rooms
                </Dropdown.Header>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Deluxe Lake View
                  </a>

                </Dropdown.Item >

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Deluxe Ocean View
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Premier Balcony
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Premier Ocean View
                  </a>

                </Dropdown.Item>
              </Col>

              <Col xs="12" md="6" lg='3' className="text-left">
                <Dropdown.Header className="custom-header">
                  Horizon Club
                </Dropdown.Header>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Horizon Club Lake View
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Horizon Club Ocean View
                  </a>

                </Dropdown.Item>
              </Col>

              <Col xs="12" md="6" lg='3' className="text-left">
                <Dropdown.Header className="custom-header">
                  Suites
                </Dropdown.Header>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Executive Suites
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Specialty Suites
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Shangri-La Suite
                  </a>

                </Dropdown.Item>
              </Col>

              <Col xs="12" md="6" lg='3' className="text-left">
                <Dropdown.Header className='custom-header'>
                  Connecting Rooms
                </Dropdown.Header>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Executive Suite & Premier Ocean Room Connecting
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Two Deluxe Lake View Rooms Connecting
                  </a>

                </Dropdown.Item>
              </Col>

              <div className='menu-divider'></div>

              <Col>
                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    ROOMS & SUITES OVERVIEW
                  </a>

                </Dropdown.Item>

              </Col>
            </Row>
          </Container>
        </div>

        {/* END OF THE SECOND SECTION */}

        {/* START OF THE THIRD SECTION */}
        <div className='home'>
          <a href='#' className='link-heading'> DINING </a>
          <Container className="eventsNav pt-0 mt-0">
            <Row className='mx-5'>
              <Col xs="12" md="6" lg='3' className="text-left">
                <Dropdown.Header className='custom-header'>
                  Restaurants
                </Dropdown.Header>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Cake Temptations by Shangri-La Colombo
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Shang Palace
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Capital Bar & Grill
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Central
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Central café
                  </a>

                </Dropdown.Item>
              </Col>

              <Col xs="12" md="6" lg='3' className="text-left">
                <Dropdown.Header className='custom-header'>
                  Bars & Lounges
                </Dropdown.Header>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Sapphyr Lounge
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Capital Bar & Grill
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Pool Bar
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Sunset Terrace
                  </a>

                </Dropdown.Item>
              </Col>
              <div className='menu-divider'></div>
              <Col>
                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    DINING OVERVIEW
                  </a>

                </Dropdown.Item>
              </Col>
            </Row>
          </Container>
        </div>
        {/* END OF THE THIRD SECION */}

        {/* START OF THE FOURTH SECTION */}
        <div className='home'>
          <a href='#' className='link-heading'> EXPERIENCE </a>
          <Container className="eventsNav pt-0 mt-0">
            <Row className='mx-5'>
              <Col xs="12" md="6" lg='3' className="text-left">
                <Dropdown.Header className='custom-header'>
                  For Kids
                </Dropdown.Header>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Overview
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Adventure Zone
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Celebrations
                  </a>

                </Dropdown.Item>
              </Col>

              <Col xs="12" md="6" lg='3' className="text-left">
                <Dropdown.Header className='custom-header'>
                  Health & Leisure
                </Dropdown.Header>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Overview
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Health Club
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Chi, The Spa
                  </a>

                </Dropdown.Item>
              </Col>
            </Row>
          </Container>
        </div>
        {/* END OF THE FOURTH SECTION */}

        {/* START OF FIFTH SECTION */}
        <div className='home'>
          <a href='#' className='link-heading'> EVENTS </a>
          <Container className="eventsNav pt-0 mt-0">
            <Row className='mx-5'>
              <Col xs="12" md="6" lg='3' className="text-left">
                <Dropdown.Header className='custom-header'>
                  Meetings & Events
                </Dropdown.Header>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Overview
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Experience It
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Coworking Space
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Outside Catering
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Request For Proposal
                  </a>

                </Dropdown.Item>

              </Col>

              <Col xs="12" md="6" lg='3' className="text-left">
                <Dropdown.Header className='custom-header'>
                  Wedding and Celebrations
                </Dropdown.Header>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Overview
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>
                  <a href='#' className="nav-a" role="button">
                    Wedding Planning
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Weddings By Shangri-La
                  </a>

                </Dropdown.Item>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Request for Proposal
                  </a>

                </Dropdown.Item>
              </Col>
            </Row>
          </Container>
        </div>

        {/* END OF FIFTH SECTION */}

        {/* START OF SIXTH SECTION */}

        <div className='home'>
          <a href='#' className='link-heading'> GALLERY </a>
        </div>

        {/* END OF SIXTH SECTION */}

        {/* START OF SEVENTH SECTION */}
        <div className='home'>
          <a href='#' className='link-heading'> OFFERS </a>
        </div>
        {/* END OF THE SEVENTH SECTION */}

        {/* START OF THE EIGHT SECTION */}

        <div className='home'>
          <a href='#' className='link-heading'> MORE </a>
          <Container className="eventsNav pt-0 mt-0">
            <Row className='mx-5'>
              <Col xs="12" md="6" lg='3' className="text-left">
                <Dropdown.Header className='custom-header'>
                  Apartments
                </Dropdown.Header>

                <Dropdown.Item className='mb-2'>

                  <a href='#' className="nav-a" role="button">
                    Learn More
                  </a>

                </Dropdown.Item>
              </Col>
            </Row>
          </Container>
        </div>
        {/* END OF EIGHT SECTION */}

      </section>

    </>
  )
}

export default BottomNavbar

