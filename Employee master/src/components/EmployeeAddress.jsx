import React from 'react'
import {
    Row,
    Col,
    Button,
    Container,
    Form,
    InputGroup,
    Card,
  } from "react-bootstrap";
  import { useState } from 'react';

export const EmployeeAddress = (props) => {

    const stateSelection = ["Tamilnadu", "Kerala", "Karnataka", "Delhi"];

    const {titleres,titleper,handleAdresssChange,handlePermanentAddress,address}=props;

  return (
    <div>

          <Card className="mb-5 w-70">
            <Card.Body>
              <Card.Title className="my-label">{titleres}</Card.Title>
              <Row className="mt-3">
                <Col md={7}>
                  <Row>
                    <Col md={7}>
                      <Form.Label className="my-label">House No</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        name="houseNo"
                        value={address.houseNo}
                        onChange={handleAdresssChange}
                        placeholder="Enter house no"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7}>
                      <Form.Label className="my-label">Street</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="street"
                        value={address.street}
                        onChange={handleAdresssChange}
                        placeholder="Enter Street"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7}>
                      <Form.Label className="my-label">Landmark</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="landMark"
                        value={address.landMark}
                        onChange={handleAdresssChange}
                        placeholder="Enter Landmark"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col md={7}>
                      <Form.Label className="my-label">State</Form.Label>
                      <Form.Select
                        required
                        aria-label="Default select example"
                        name="state"
                        value={address.state}
                        onChange={handleAdresssChange}
                      >
                        <option disabled selected>
                          Choose State
                        </option>
                        {stateSelection.map((states) => (
                          <option>{states}</option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7}>
                      <Form.Label className="my-label">City</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="city"
                        value={address.city}
                        onChange={handleAdresssChange}
                        placeholder="Enter city"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7}>
                      <Form.Label className="my-label">Pin Code</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        name="pincode"
                        value={address.pincode}
                        onChange={handleAdresssChange}
                        placeholder="Enter Pincode"
                      />
                    </Col>
                  </Row>
                </Col>

        
              </Row>
            </Card.Body>
          </Card>



    </div>
  )
}
