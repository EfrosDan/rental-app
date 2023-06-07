import React from 'react'
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import { Container } from "reactstrap";
import {Link} from 'react-router-dom'
import Footer from "../pages/Footer";
import driveImg from "../assets/drive.jpg"

function About() {
    const user = JSON.parse(localStorage.getItem('user'))
    const menu = (
    <Menu>
        <Menu.Item>
        <a
         
          href="/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          
          href="/userbookings"
        >
          Bookings
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
         
          href="/admin"
        >
          Admin
        </a>
      </Menu.Item>
      <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header bs1">
        <Row gutter={16} justify='center'>
            <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
                <h1 ><b><Link to='/' style={{color:'orangered'}}>Rent Car Service</Link></b></h1>
                    <Link to='/about'>About us</Link>
                    <Link to='/contact'>Contact Us</Link>

                <Dropdown overlay={menu} placement="bottomCenter">
                <Button>{user.username}</Button>
                </Dropdown>
            </div>
             </Col>
         </Row>

        <div className="text-center">
            <h1 className="text-dark">About Us</h1>
        </div>
        <section className="about__section-item ">
        <Container>
          <Row>
            <Col lg={12} md={6} sm={12}>
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-6" />
              </div>
            </Col>

            <Col lg={12} md={6} sm={12}>
              <div className="about__page-content ml-4 text-left">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                Welcome to our car rental company! With a diverse fleet of cars, we are able to meet the needs and preferences of all our customers.
                We offer car rental services for different periods of time - from a few hours to a few weeks or even months. Whether you need a car for a 
                business trip,a family trip or a romantic getaway, we're here to help you find the perfect car for your trip.
                </p>

                <p className="section__description">
                All our cars are well maintained and checked regularly for your safety and comfort. We also ensure that all our cars are clean 
                and sanitized before each rental, so you can enjoy a pleasant and worry-free driving experience.
                To make your car rental experience as simple and convenient as possible, we offer car delivery and pick-up services at various 
                locations in the city or airport. We are also available 24/7 to provide support and assistance should you need help.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
        <div>
            <hr />
        <Footer/>
          
        </div>
</div>
  )
}

export default About