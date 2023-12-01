/* eslint-disable react/prop-types */
import React from 'react';
import Form from 'react-bootstrap/Form';

function FilterBeast(props) {

    function handleFilter (e) {
        let filterHorns = e.target.value
        let filteredBeasts = props.allBeasts
        if (e.target.value > 0) {
            filteredBeasts = props.allBeasts.filter(horns => horns.horns === parseInt(filterHorns))
        }
        console.log(filteredBeasts)
    }
    


    return (
        <>
            <Form.Select aria-label="Default select example" onChange={handleFilter} >
                <option value='all'>How many horns?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </>
        
  );
}

export default FilterBeast;