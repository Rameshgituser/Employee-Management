import React, { useState } from 'react'
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import * as FaIcons from "react-icons/fa";


export const EmployeeInformation = ({familyinfo,handleEmployeeInfoChange}) => {

    // const {validated,setValidated} =props

 

     const [showInput,setShowInput] = useState(true);

    

      const families = ["Brother", "Sister", "Cousin", "Delhi"];

   return (


    <div>

   
 <Card className='mb-5'>
         
  <Card.Body>
   <Card.Title></Card.Title>
   <Row className="mb-3" Col="6">
        {showInput ? (
          <>
            <Col md={4}>
              <Form.Group as={Col}>
                <Form.Label className="mylable">Family / Members</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="relationShip"  
                  value={familyinfo.relationShip}
                  onChange={handleEmployeeInfoChange}
                >
                  <option disabled selected>
                    Choose Relationship
                  </option>

                  {families.map((opt) => (
                    <option>{opt}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </>
        ) : (
          <></>
        )}

{showInput && (
          <Col md={4}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                onChange={handleEmployeeInfoChange}
                value={familyinfo.fullName}
              ></Form.Control>
            </Form.Group>
          </Col>
        )}
      </Row>

      <Row>
        {showInput && (
          <Col md={6}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                onChange={handleEmployeeInfoChange}
                value={familyinfo.fullName}
              ></Form.Control>
            </Form.Group>
          </Col>
        )}
      </Row>

      <Row>
        {showInput && (
          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                onChange={handleEmployeeInfoChange}
                value={familyinfo.dateOfBirth}
              ></Form.Control>
            </Form.Group>
          </Col>
        )}

        {showInput && (
          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">Mobile No</Form.Label>
              <Form.Control
                type="number"
                name="mobileNo"
                placeholder="Enter Mobile No"
                onChange={handleEmployeeInfoChange}
                value={familyinfo.mobileNo}
              ></Form.Control>
            </Form.Group>
          </Col>
        )}

{showInput && (
          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">Additional Notes</Form.Label>
              <Form.Control
                type="text"
                name="additionalNotes"
                placeholder="Enter Notes"
                onChange={handleEmployeeInfoChange}
                value={familyinfo.additionalNotes}
              ></Form.Control>
            </Form.Group>
          </Col>
        )}
      </Row>

<Row>

  {showInput && (
      <Row className="mt-3">
      <Col md={3}>
        <button
          className="btn btn-secondary"
          onClick={() => setShowInput(!showInput)}
        >
          Remove
          <span className="m-1">
            <FaIcons.FaTrash></FaIcons.FaTrash>
          </span>
        </button>
      </Col>
    </Row>

  )}
</Row>
  </Card.Body>


</Card> 

 
       
    </div>
  )
}
