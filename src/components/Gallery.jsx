/* eslint-disable no-unused-vars */
import React from 'react'
import HornedBeast from './HornedBeastOne.jsx'
import BeastData from '../data.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


function Gallery() {
    console.log(BeastData);
    return (
        <Container>
            <Row xs={true}md={true}>

            {
                BeastData.map((eachBeast,i) =>
                <HornedBeast 
                key={i}
                id={eachBeast._id}
                title={eachBeast.title}
                img={eachBeast.image_url}
                description={eachBeast.description}
                keyword={eachBeast.keyword}
                horns={eachBeast.horns}
                />
                )
            }
            </Row>
            
        </Container>
    )
}

export default Gallery