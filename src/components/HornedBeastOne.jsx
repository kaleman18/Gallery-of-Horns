/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SelectedBeast from './SelectedBeast'

  

function HornedBeast(props) {
    const [favorite, setFavorite] = useState(0)
    const [show, setShow]= useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
      <>
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" style={{margin: '5px'}} onClick={() => {setFavorite(favorite + 1);handleShow()}} src={props.img} alt="Horned Beasts" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{`❤️ ${favorite}`}</ListGroup.Item>
          <ListGroup.Item>Number of horns: {`${props.horns}`}</ListGroup.Item>
          <ListGroup.Item>KeyWord: {`${props.keyword}`}</ListGroup.Item>
        </ListGroup>
      </Card>
      <SelectedBeast
      title={props.title}
      img={props.img}
      description = {props.description}
      handleClose= {handleClose}
      show={show}
      />
      </>
      
    );
  }

export default HornedBeast