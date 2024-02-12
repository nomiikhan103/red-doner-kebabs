"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import NavigationSection from "../navigation/NavigationSection";
import { useCafeuContext } from "@/context/CafeuContext";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

import Tab from "react-bootstrap/Tab";
import { Checkbox } from "@mui/material";
import DropdownCartSection from "../cart/DropdownCartSection";
import Dropdown from "react-bootstrap/Dropdown";
import "./header.scss";
import DropdownUserSection from "../cart/DropDownUserSection";
interface HeaderProps {
  style: string;
}

const Header: React.FC<HeaderProps> = ({ style }) => {
  const { isHeaderFixed, openSearchbarModal, openSidebar, cartItemAmount } =
    useCafeuContext();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>
      <div className={`header ${style} ${isHeaderFixed ? "navbar-fixed" : ""}`}>
        <div className='container'>
          <div className='header-inner'>
            <div className='logo'>
              <Link href='/'>
                <img
                  src='/img/logo/redkebab.png'
                  alt='Logo not found'
                  className='logo-img'
                />
              </Link>
            </div>
            <div className='header-right'>
              <div className='header-menu d-none d-lg-block'>
                <NavigationSection />
              </div>
              <div className='header-right-search-phone d-flex align-items-center ml-35'>
                <a
                  className='header-search'
                  id='search'
                  role='button'
                  onClick={openSearchbarModal}
                >
                  <span className='icofont-search-1 px-4'></span>
                </a>
                <li className='nav-list ' style={{ marginRight: "1rem" }}>
                  <a className='nav-link icon-item'>
                    <span className='icofont-shopping-cart'>
                      {" "}
                      <span className='cart-count'>{cartItemAmount}</span>
                    </span>
                  </a>
                  <DropdownCartSection />
                </li>
                {/* <li className='nav-list nav-list-user'>
                  <span
                    className='icofont-ui-user'
                    style={{
                      fontSize: "1.3rem",
                      marginInline: ".5rem",
                    }}
                  ></span>
                  <Link href="/my-account" className="nav-link icon-item">
                    </Link>
                  <DropdownUserSection />
                </li> */}
                <li>
                  <Link href='tel:+923000954264' className='header-phone'>
                    <img
                      src='/img/icon/call.png'
                      alt='Image not found'
                      className='contact-icon'
                    />{" "}
                    +34952443505
                  </Link>
                </li>
                <Dropdown className='mx-3 btn-sm'>
                  <Dropdown.Toggle
                    variant='danger'
                    className='rounded'
                    id='dropdown-basic'
                  >
                    <i className='icofont-ui-user'></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='/signup'>
                      <a href='/signup' className='userdropdown'>
                        My Accout
                      </a>
                    </Dropdown.Item>

                    <Dropdown.Item href='/signup'>
                      <a href='/signup' className='userdropdown'>
                        User Registration
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item href='/userlogin'>
                      <a href='/userlogin' className='userdropdown'>
                        User Login
                      </a>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                  <Dropdown.Menu>
                    <Dropdown.Item href='/signup'>
                      <a href='/user' className='userdropdown'>
                        My Accout
                      </a>
                    </Dropdown.Item>

                    <Dropdown.Item href='/signup'>
                      <a href='/signup' className='userdropdown'>
                        User Registration
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item href='/userlogin'>
                      <a href='/userlogin' className='userdropdown'>
                        User Login
                      </a>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <span className='dr-sidebar-btn-wrap '>
                {/* <Link href='tel:+923000954264' className='header-phone'>
                  <img
                    src='/img/icon/call.png'
                    alt='Image not found'
                    className='contact-icon'
                  />{" "}
                  +34952443505
                </Link> */}

                {/* <Button
                  variant=''
                  onClick={handleShow}
                  className='custom-btn mx-1'
                >
                  Log in
                </Button> */}

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton className='bg-white'>
                    <Modal.Title>Login to your Account</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='bg-white'>
                    <Tab.Container
                      id='left-tabs-example'
                      defaultActiveKey='first'
                    >
                      <Row>
                        <Col sm={12}>
                          <Nav
                            variant='pills'
                            className='flex-row justify-content-center bg-white'
                          >
                            <Nav.Item className='bg-white'>
                              <Nav.Link
                                eventKey='first'
                                className='bg-danger text-white  pt-1 pb-1 pe-4 px-4'
                              >
                                Registration
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                eventKey='second'
                                className='bg-danger text-white mx-2 pt-1 pb-1 pe-5 px-5'
                              >
                                Log in
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={12}>
                          <Tab.Content>
                            <Tab.Pane eventKey='first'>
                              <Form className='mt-2 px-2 pe-2'>
                                <Form.Group
                                  className='mb-3'
                                  controlId='exampleForm.ControlInput1'
                                >
                                  <Form.Label>
                                    <b>User Name</b>
                                  </Form.Label>

                                  <Form.Control
                                    type='text'
                                    placeholder='User Name'
                                  />
                                </Form.Group>

                                <Form.Group
                                  className='mb-3'
                                  controlId='exampleForm.ControlInput1'
                                >
                                  <Form.Label>
                                    <b>Email</b>
                                  </Form.Label>
                                  <Form.Control
                                    type='Email'
                                    placeholder='Email'
                                  />
                                </Form.Group>

                                <Form.Group
                                  className='mb-3'
                                  controlId='exampleForm.ControlInput1'
                                >
                                  <Form.Label>
                                    <b>Password</b>
                                  </Form.Label>
                                  <Form.Control
                                    type='password'
                                    placeholder='Password'
                                  />

                                  <div className=' d-flex justify-content-center mt-3'>
                                    <Button
                                      variant='primary'
                                      className='custom-btn px-5 pe-5'
                                      onClick={handleClose}
                                    >
                                      Register Now
                                    </Button>
                                  </div>
                                </Form.Group>
                              </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                              <Form className='mt-2 px-2 pe-2'>
                                <Form.Group
                                  className='mb-3'
                                  controlId='exampleForm.ControlInput1'
                                >
                                  <Form.Label>
                                    <b>Email</b>
                                  </Form.Label>

                                  <Form.Control
                                    type='email'
                                    placeholder='Email'
                                  />
                                </Form.Group>

                                <Form.Group
                                  className='mb-3'
                                  controlId='exampleForm.ControlInput1'
                                >
                                  <Form.Label>
                                    <b>Password</b>
                                  </Form.Label>
                                  <Form.Control
                                    type='password'
                                    placeholder='Password'
                                  />
                                </Form.Group>
                                <a
                                  href='#'
                                  className='text-danger'
                                  style={{ display: "block" }}
                                >
                                  <b>Forgot Password</b>
                                </a>
                                <span>Remember Password</span>
                                <input type='checkbox' className='mx-1' />
                              </Form>
                              <div className=' d-flex justify-content-center mt-3'>
                                <Button
                                  variant='primary'
                                  className='custom-btn px-5 pe-5'
                                  onClick={handleClose}
                                >
                                  Log in
                                </Button>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Modal.Body>
                </Modal>
              </span>

              <div className='d-lg-none dr-navbar-mobile-sign side-toggle'>
                <div
                  className='dr-navbar-sign menu-tab'
                  role='button'
                  onClick={openSidebar}
                >
                  <span className='dr-line-1'></span>
                  <span className='dr-line-2'></span>
                  <span className='dr-line-3'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
