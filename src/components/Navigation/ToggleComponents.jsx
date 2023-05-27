import React, { useState } from 'react';
import './navigation.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineClose } from "react-icons/ai";
import './navigation.css';
import { BsPerson } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode, currentMode } from '../../features/modeSlice';
import { GoThreeBars } from "react-icons/go";
import BottomNavbar from './BottomNavbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ToggleComponents() {
    const mode = useSelector(currentMode);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleCurrentMode = () => {
        dispatch(toggleMode())
    }
    return (
        <>
            <div className='menu-toggle-btn' onClick={handleShow}>
                <GoThreeBars size={'1.5rem'} />
            </div>
            <Offcanvas show={show} onHide={handleClose} placement='end' className='w-100 offcanvas-content'>
                <Offcanvas.Header>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                    <AiOutlineClose fontSize={'1.4rem'} onClick={handleClose} cursor={'pointer'} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* -------------------------------------------------------------------------- */}
                    <div className='menu'>
                        <NavDropdown id="basic-nav-dropdown" title="ABOUT" className='mb-4'>
                            <NavDropdown title="About the hotel" className='mx-5'>
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

                            </NavDropdown>
                        </NavDropdown>
                        {/* -------------------------------------------------------------------------- */}

                        <NavDropdown title="ROOMS & SUITES" className='mb-4'>
                            <NavDropdown title="Rooms" className='mb-4 mx-5'>
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
                            </NavDropdown>

                            <NavDropdown title="Horizon Club" className='mb-4 mx-5'>
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
                            </NavDropdown>
                            <NavDropdown title="Suites" className='mb-4 mx-5'>
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
                            </NavDropdown>

                            <NavDropdown title="Connecting Rooms" className='mx-5' >
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
                            </NavDropdown>
                        </NavDropdown>

                        {/* -------------------------------------------------------------------------- */}
                        <NavDropdown title="DINING" className='mb-4'>
                            <NavDropdown title="Restaurants" className='mb-4 mx-5'>
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
                            </NavDropdown>
                            <NavDropdown title="Bars & Lounges" className='mx-5'>
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
                            </NavDropdown>
                        </NavDropdown>
                        {/* -------------------------------------------------------------------------- */}


                        <NavDropdown title="EXPERIENCE" className='mb-4'>
                            <NavDropdown title="For Kids" className='mb-4 mx-5'>
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
                            </NavDropdown>
                            <NavDropdown title="Health & Leisure" className='mx-5'>
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
                            </NavDropdown>
                        </NavDropdown>

                        {/* -------------------------------------------------------------------------- */}
                        <NavDropdown title="EVENTS" className='mb-4'>
                            <NavDropdown title="Meetings & Events" className='mx-5 mb-4'>
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
                            </NavDropdown>
                            <NavDropdown title="Wedding and Celebrations" className='mx-5'>
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
                            </NavDropdown>
                        </NavDropdown>
                        {/* -------------------------------------------------------------------------- */}

                        <div className='home mb-4' > <a href="#">GALLERY </a></div>
                        <div className='home mb-4' > <a href="#">OFFERS </a></div>

                        <NavDropdown title="MORE" className='mb-4'>
                            <NavDropdown title="Apartments" className='mx-5'>
                                <Dropdown.Item className='mb-2'>

                                    <a href='#' className="nav-a" role="button">
                                        Learn More
                                    </a>
                                </Dropdown.Item>
                            </NavDropdown>
                        </NavDropdown>

                        <div style={{ display: 'block' }}>
                            <div className='compartment'>
                                <BsPerson />
                                <a href='#'> Sign in </a>
                            </div>

                            <div className='compartment'>
                                <a href='#'> Join Now </a>
                            </div>

                            <div className='compartment'>
                                <a href='#'> Find Reservations </a>
                            </div>

                            <div className='compartment'>
                                <BsGlobe />
                                <a href='#'> English </a>
                            </div>

                            <div className='compartment'>
                                <a href='#'> LKR </a>
                            </div>

                            <div className='compartment'>
                                <a href='#'> <BsPhone /> </a>
                            </div>
                            <div className='compartment'>
                                <div onClick={toggleCurrentMode} className='mode-toggle'>
                                    {
                                        mode === "dark" ? <BsMoonFill /> : <BsFillSunFill />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
                <BottomNavbar />
            </Offcanvas>
        </>
    )
}

export default ToggleComponents