/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import HornedBeast from './HornedBeastOne.jsx'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


function Gallery(props) {

    return (
        <Container>
            <Row xs={true}md={true}>

            {
                
                props.allBeast.map((eachBeast,i) =>
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