import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaFacebook,FaWhatsapp,FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarousel/BrandCarosel';

const RightSideNev = () => {
    return (
        <div>
          <ButtonGroup vertical>
               <Button className='my-2' variant="outline-primary"><FaGoogle/> Login With Google</Button>
               <Button className='mb-2' variant="outline-dark"> <AiFillGithub/> Login with Github</Button>
          </ButtonGroup>

          <div>
             <h5> Find us on </h5>

          <ListGroup>
                 <ListGroup.Item className='my-1'><FaFacebook/> Facebook</ListGroup.Item>
                 <ListGroup.Item className='my-1'><FaWhatsapp/>Whatsapp</ListGroup.Item>
                 <ListGroup.Item className='my-1'><FaTwitter/>Twitter</ListGroup.Item>
                 
          </ListGroup>
          </div>
          <div>
               <BrandCarosel></BrandCarosel> 

          </div>
        
        </div>

    );
};

export default RightSideNev;