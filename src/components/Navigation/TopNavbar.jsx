import React from 'react';
import './navigation.css';
import { BsPerson } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode, currentMode } from '../../features/modeSlice';
import ToggleComponents from './ToggleComponents';


function TopNavbar() {

    const mode = useSelector(currentMode);
    const dispatch = useDispatch();

    const toggleCurrentMode = () => {
        dispatch(toggleMode())
    }
    return (
        <nav id='homestarter'>
            <div className='top-nav'>
                <div className='logo'>
                    Hotel
                </div>
                <ToggleComponents />

                <div className='nav-options'>
                    <div>
                        <BsPerson />
                        <a href='#'> Sign in </a>
                    </div>
                    <div className='divider-nav'></div>
                    <div>
                        <a href='#'> Join Now </a>
                    </div>
                    <div className='divider-nav'></div>
                    <div>
                        <a href='#'> Find Reservations </a>
                    </div>
                    <div className='divider-nav'></div>
                    <div>
                        <BsGlobe />
                        <a href='#'> English </a>
                    </div>
                    <div className='divider-nav'></div>
                    <div>
                        <a href='#'> LKR </a>
                    </div>
                    <div className='divider-nav'></div>
                    <div>
                        <a href='#'> <BsPhone /> </a>
                    </div>
                    <div className='divider-nav'></div>
                    <div onClick={toggleCurrentMode} className='mode-toggle'>
                        {
                            mode === "dark" ? <BsMoonFill /> : <BsFillSunFill />
                        }


                    </div>
                </div>

            </div>
        </nav>
    )
}

export default TopNavbar