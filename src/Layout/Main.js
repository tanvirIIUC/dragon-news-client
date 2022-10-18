import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNev from '../Pages/Shared/LeftSideNev/LeftSideNev';
import RightSideNev from '../Pages/Shared/RightSideNev/RightSideNev';

const Main = () => {
    return (
        <div>
            <Header></Header>
           <Container>
              <Row>
                  <Col lg="2" >
                      <LeftSideNev></LeftSideNev>
                  </Col>
                  <Col lg="7">
                       <Outlet></Outlet>
                  </Col>
                  <Col lg="3">
                       <RightSideNev></RightSideNev>
                  </Col>
              </Row>
           </Container>
           <Footer></Footer>
        </div>
    );
};

export default Main;