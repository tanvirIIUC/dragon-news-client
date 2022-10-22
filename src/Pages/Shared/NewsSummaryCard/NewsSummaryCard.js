import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
const NewsSummaryCard = ({ news }) => {
    const {_id,title,author,details,image_url,tottal_view}= news;
    return (
        <div>
            <Card className="">
      <Card.Header>
         <div>
            <Image
            roundedCircle
              src={author.img}
            style={{height:'60px'}}
          
            ></Image>
         </div>

      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
          {
            details.length>200 ?
            <p>{details.slice(0,250)+"....."}<Link to={`/news/${_id}`}>read more</Link></p>
            :
            <p>{details}</p>
          }
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
        </div>
    );
};

export default NewsSummaryCard;