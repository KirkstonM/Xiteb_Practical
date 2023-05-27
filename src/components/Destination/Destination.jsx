import React, { useState } from 'react';
import './destination.css';
import { data } from '../../data/destination';
import { Container } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";


function Destination() {
  const [destinationData, setDestinationData] = useState(data);
  const [selectedOption, setSelectedOption] = useState(data[0].id);
  const [showlist, setShowlist] = useState(false);

  const handleChange = (e) => {
    const selectedValue = e.target.getAttribute("value");
    setSelectedOption(selectedValue)
    setShowlist(!showlist)

  };

  return (
    <section >
      <Container>
        <div className='header-section my-5'>
          <h1> Destinations </h1>
        </div>
        <div className='destination-body'>
          <div className='drop-down-body'>
            <button onClick={() => setShowlist(!showlist)}>
              {destinationData.find(item => item.id === selectedOption).name}
              <IoIosArrowDown />
            </button>
          </div>

          <div className={`select-menu ${showlist ? "drop" : ""}`}>
            <ul>
              {destinationData.map(item => (
                <li key={item.id} value={item.id} onClick={handleChange}> {item.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <main>
          <div className='destination-image-section'>
            <img src={destinationData.find(item => item.id === selectedOption).country_image} className='country-image' />
            <img src={destinationData.find(item => item.id === selectedOption).location_image} className='location-image' />
            <div className='destination-short'>
              <h3>
                {destinationData.find(item => item.id === selectedOption).name}
              </h3>
              <p>
                {destinationData.find(item => item.id === selectedOption).desc}
              </p>
              <button>
                Discover More
              </button>
            </div>
          </div>
        </main>
      </Container>
    </section>
  )
}

export default Destination
