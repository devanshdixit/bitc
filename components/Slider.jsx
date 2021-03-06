/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import styles from '../styles/Slider.module.css'
import Images from 'next/image'
const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  function scrollto() {
    const contact = window.document.getElementById("contact");
    contact.scrollIntoView();
  }
  return (
    <div className="container">
      <Carousel activeIndex={index} variant="dark" controls={false} onSelect={handleSelect}>
        <Carousel.Item>
          <Row style={{alignItems:"center"}}>
            <Col lg={6} className="order-lg-2 p-2 pb-4 " >
              <img src={`/images/tilted.png`} className="img-fluid" alt="" />
            </Col>
            <Col lg={6} className="order-lg-1 pb-4 pt-4">
              <Container>
                <p className={styles.header}>We are building products that provide better service</p>
                <Button type="submit" onClick={scrollto} variant="primary" className={styles.button}>Contact Us</Button>
              </Container>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Slider;