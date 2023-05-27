import React, { useState } from 'react';
import './experience.css';
import { Container, Row, Col } from 'react-bootstrap';
import { data } from '../../data/experience';

function Experience() {

  const [experienceData, setExperienceData] = useState(data);

  return (
    <section className='experience-section p-5 mt-5'>
      <Container>
        <div className='header-section mb-4'>
          <h1> Experience Something New </h1>
        </div>

        <div className='experience-desc'>
          <p>There’s still time to save on your summer stay.</p>
        </div>
        <div className='grid-section mt-4'>
          <Row className='gx-3 gy-3'>
            {experienceData.map(item => (
              <Col xs={12} sm={6} md={6} xl={4} key={item.id} className='cc'>
                <div className='card-container'>
                  <img src={item.img} alt={item.alternate} className='experience-images' />
                  <div className='overlay'>
                    <span>
                      {item.title}
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Experience