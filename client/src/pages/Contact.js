import React from 'react'
import { Menu, Dropdown, Button,Row ,Col, Form,Input } from "antd";
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import Footer from "../pages/Footer";
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import { Icon } from '@iconify/react';

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
        .join(`&`)
}

const Contact = () => {
    const { TextArea } = Input
    const user = JSON.parse(localStorage.getItem('user'))
    const menu = (
    <Menu>
        <Menu.Item>
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/userbookings"> Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/admin"> Admin</a>
      </Menu.Item>
      <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );
    const formName = `contact`

    const handleSubmit = (values) => {
        if (values[`bot-field`] === undefined) {
            delete values[`bot-field`]
        }

        fetch(`/`, {
            method: `POST`,
            headers: { 'Content-Type': `application/x-www-form-urlencoded` },
            body: encode({
                'form-name': formName,
                ...values,
            }),
        })
            .then(() => showSuccess())
            .catch(error => showError(error))
    }

    const showSuccess = () => {
        // TODO: Show a success message or navigate to a success page.
        console.log(`form submitted successfully`)
    }

    const showError = (error) => {
        // TODO: Show an error message to the user
        console.log(`There was an error submitting the form`)
        console.log(error)
    }

    return (
       
        <div className="header bs1">
        <Row gutter={16} justify='center'>
            <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
                <h1 ><b><Link to='/' style={{color:'orangered'}}>Rent Car Service</Link></b></h1>
                    <Link to='/about'>About us</Link>
                    <Link to='/about'>Contact Us</Link>

                <Dropdown overlay={menu} placement="bottomCenter">
                <Button>{user.username}</Button>
                </Dropdown>
            </div>
             </Col>
         </Row>

        <div className="text-center">
            <h1 className="text-dark">Contact</h1>
        </div>
        <Row
            justify="space-around"
        >
            <Col
                xs={22}
                sm={18}
                md={16}
                lg={8}
            >

                {/*
                    This defines how your form is setup for the Netlify bots.
                    Users will not see or interact with this form.
                */}
                <form
                    name={formName}
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    hidden
                >
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <textarea name="message"></textarea>
                </form>

                <Form
                    name="cf"
                    method="post"
                    onFinish={handleSubmit}
                    layout="vertical"
                >
                    {/* This is the hidden field that the netlify-honeypot uses. */}
                    <Form.Item
                        label="Don't fill this out"
                        className={`hidden`}
                        style={{ display: `none` }}
                        name="bot-field"
                    >
                        <Input type={`hidden`} />
                    </Form.Item>

                    <Form.Item
                        label="Name"
                        rules={[{ required: true, message: `Please enter your name.` }]}
                        name="name"
                    >
                        <Input
                            placeholder="Name"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        rules={[{ required: true, type: `email`, message: `Please enter your email.` }]}
                        name="email"
                    >
                        <Input
                            placeholder="Your Email"
                            prefix={<MailOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Message"
                        rules={[{ required: true, message: `Please enter your message.` }]}
                        name="message"
                    >
                        <TextArea
                            placeholder="Your Message"
                            rows={5}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={false}>
                            Send
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col lg={5} md={5}>
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                123 Bd. Mosova, Chisinau, Moldova
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+373068111111</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">rent.cars@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className="d-grid align-items-center  gap-4 mt-3">
                <Icon icon="ri:facebook-circle-line" />
                <Icon icon="mdi:instagram" />
                <Icon icon="mdi:twitter" />
                </div>
              </div>
            </Col>
        </Row>

        <div>
            <hr />
        <Footer/>
          
        </div>
</div>
    
    )
}
export default Contact