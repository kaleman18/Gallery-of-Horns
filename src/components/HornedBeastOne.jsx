/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function HornedBeast(props) {
    const [favorite, setFavorite] = useState(0)
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" onClick={() => setFavorite(favorite + 1)} src={props.img} alt="Horned Beasts" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{`❤️ ${favorite}`}</ListGroup.Item>
          <ListGroup.Item>Number of horns: {`${props.horns}`}</ListGroup.Item>
          <ListGroup.Item>KeyWord: {`${props.keyword}`}</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }

export default HornedBeast