import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom'
import Footer from "../pages/Footer";
import ava01 from "../assets/ava-1.jpg";
import ava02 from "../assets/ava-2.jpg";
import ava03 from "../assets/ava-3.jpg";

function DefaultLayout(props) {
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
    <div>
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
        
      </div>
      <div className="content">{props.children}</div>

      <div className="mt-5 text-center">
      <h6 className="section__subtitle">Our clients says</h6>
  
            <div class="container cards-wrapper d-flex gx-5" >
            <div class="card align-items-center">
              <img src={ava01} class="card-img-top " alt="..." style={{"width" : "16rem"}}/>
              <div class="card-body">
                <h5 class="card-title">Ionuț Popescu</h5>
                <p class="card-text">În ceea ce privește experiența mea cu închirierea unei mașini, aș putea spune că a fost în general una plăcută și fără probleme majore. 
                Am ales o companie de închiriere auto de încredere și am fost mulțumit de prețul și condițiile contractului de închiriere.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card align-items-center">
              <img src={ava02} class="card-img-top" alt="..."style={{"width" : "14rem"}} />
              <div class="card-body">
                <h5 class="card-title">Elena Radu</h5>
                <p class="card-text">Am închiriat un automobil pentru o călătorie de afaceri și am fost foarte mulțumit de modul în care a fost gestionată întreaga experiență. 
                Procesul de rezervare a fost foarte simplu și eficient, iar personalul companiei a fost foarte profesionist și amabil în toate interacțiunile noastre.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card align-items-center">
              <img src={ava03} class="card-img-top " alt="..." style={{"width" : "16rem"}}/>
              <div class="card-body">
                <h5 class="card-title">Mihai Pop</h5>
                <p class="card-text">Am avut o experiență excelentă in închiriere auto în timpul ultimei mele vacanțe. 
                Procesul de rezervare a fost ușor și eficient, iar personalul companiei a fost foarte amabil și profesionist în toate interacțiunile noastre.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      <div>
      <hr />
      <Footer/>
          
      </div>
    </div>
  );
}

export default DefaultLayout;
