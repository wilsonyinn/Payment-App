import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style = {{width: 800, height: 550}}
      src="../assets/money-transfer.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Transfer Money</h3>
      <p>A platform for transferring money between users</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style = {{width: 800, height: 550}}
      src="../assets/internet.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Social Transferring</h3>
      <p>Payments can be publicized for the public eye!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  )
}

export default Slider