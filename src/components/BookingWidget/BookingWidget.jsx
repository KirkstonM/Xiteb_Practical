import React, { useState } from 'react';
import './bookingwidget.css';
import { Container } from 'react-bootstrap';
import { AiFillTag } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";

function BookingWidget() {

    const [adults, setAdults] = useState(0); 
    const [children, setChildren] = useState(0);
    const [openPopup, setOpenPopup] = useState(false);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [numOfDays, setNumOfDays] = useState(0);

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
        calculateNumOfDays(event.target.value, endDate);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
        calculateNumOfDays(startDate, event.target.value);
    };

    const calculateNumOfDays = (start, end) => {
        if (start && end) {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const timeDifference = endDate.getTime() - startDate.getTime();
            const numOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
            setNumOfDays(numOfDays);
        }
    };

    return (
        <Container>
            <div className='booking-tab'>
                <div className='sections'>
                    <div className='date-picker-tab'>
                        <form>
                            <input
                                type="date"
                                id="start-date"
                                value={startDate}
                                onChange={handleStartDateChange}
                                className='date-control'
                            />
                            <span> {numOfDays} Nights </span>

                            <input
                                type="date"
                                id="end-date"
                                value={endDate}
                                onChange={handleEndDateChange}
                                className='date-control'
                            />
                        </form>
                    </div>
                    {/* booking tab */}
                    <div className='room-booking-tab' onClick={() => setOpenPopup(!openPopup)}>
                        <RxPerson />
                        <span>1 Room, {adults} Adults, {children} Children</span>


                    </div>

                    {/* code tab */}
                    <div className='code-tab'>
                        <AiFillTag />
                        <span> Special Code </span>
                    </div>
                </div>
            </div>

            {/* MODAL SECTIONS */}
            <div className={`room-booking-popup ${openPopup ? "" : "hide"}`}>
                <GrFormClose
                    style=
                    {{
                        display: 'block',
                        float: 'right',
                        fontSize: '20px',
                        cursor: 'pointer'
                    }}
                    onClick={() => setOpenPopup(!openPopup)}
                />
                <h5> Max. 8 guests per room </h5>
                <div className='people'>
                    <span> Adult(s)</span>
                    <span> Children(under 12)</span>
                </div>
                <div className='bookings'>
                    <h6>  Room 1 </h6>

                    <div className='counter'>
                        <button onClick={() => setAdults(prev => prev - 1)}
                            disabled={adults === 0}> - </button>

                        <span> {adults} </span>
                        <button onClick={() => setAdults(prev => prev + 1)}
                            disabled={adults === 3}> + </button>

                    </div>

                    <div className='counter'>
                        <button onClick={() => setChildren(prev => prev - 1)}
                            disabled={children === 0}> - </button>

                        <span> {children} </span>

                        <button onClick={() => setChildren(prev => prev + 1)}
                            disabled={children === 2}> + </button>

                    </div>

                </div>
                <div className='divider'></div>
                <button className='addroom-btn'>
                    + Add Room
                </button>
            </div>
        </Container>
    )
}

export default BookingWidget