import React, { useState } from 'react'
import { Row, Col, Form, Button, Card } from 'react-bootstrap';


export const EmployeeInformation = ({empinfo,handleEmployeeInfoChange}) => {

    // const {validated,setValidated} =props

     const [showInput,setShowInput] = useState(true);

     const stateSelection = ["Tamilnadu", "Kerala", "Karnataka", "Delhi"];

  return (


    <div>

         
  <Card className='mb-5'>        
  <Card.Body>
   <Card.Title>Residence Address</Card.Title>
   <Row>
  <Col md={4}>
<Form.Label className='my-label'>house No</Form.Label>
<Form.Control
  required
  type="number"
  name="houseNo"
  value={empinfo.houseNo}
  onChange={handleEmployeeInfoChange}
  placeholder="Last name"
  
/>
  </Col>
  <Col md={4}>
<Form.Label className='my-label'>Street</Form.Label>
<Form.Control
  required
  type="text"
  name="street"
  value={empinfo.street}
  onChange={handleEmployeeInfoChange}
  placeholder="Enter Street"
  
/>
  </Col>
  <Col md={4}>
<Form.Label className='my-label'>Landmark</Form.Label>
<Form.Control
  required
  type="text"
  name="landMark"
  value={empinfo.landMark}
  onChange={handleEmployeeInfoChange}
  placeholder="Enter Landmark"
  
/>
  </Col>
</Row>


<Row>
  <Col md={4}>
<Form.Label className='my-label'>state</Form.Label>
<Form.Select
  required
  aria-label="Default select example"
  name="state"
  value={empinfo.state}
  onChange={handleEmployeeInfoChange}
  placeholder="Last name"
  
>
    <option disabled selected>
        Choose State
    </option>
    {stateSelection.map((states)=>{
        <option>{states}</option>
    })}

</Form.Select>
  </Col>
  <Col md={4}>
<Form.Label className='my-label'>city</Form.Label>
<Form.Control
  required
  type="text"
  name="city"
  value={empinfo.city}
  onChange={handleEmployeeInfoChange}
  placeholder="Enter city"
  
/>
  </Col>
  <Col md={4}>
<Form.Label className='my-label'>Pin Code</Form.Label>
<Form.Control
  required
  type="number"
  name="pincode"
  value={empinfo.pincode}
  onChange={handleEmployeeInfoChange}
  placeholder="Enter Pincode"
  
/>
  </Col>
</Row>
  </Card.Body>


</Card>

<Card className='mb-5'>
         
  <Card.Body>
   <Card.Title>permanent Address</Card.Title>

   <Row>
  <Col md={4}>
<Form.Label className='my-label'>house No</Form.Label>
<Form.Control
  required
  type="number"
  name="houseNo"
  value={empinfo.houseNo}
  onChange={handleEmployeeInfoChange}
  placeholder="Enter house no"
  
/>
  </Col>
  <Col md={4}>
<Form.Label className='my-label'>Street</Form.Label>
<Form.Control
  required
  type="text"
  name="street"
  value={empinfo.street}
  onChange={handleEmployeeInfoChange}
  placeholder="Enter Street"
  
/>
  </Col>
  <Col md={4}>
<Form.Label className='my-label'>Landmark</Form.Label>
<Form.Control
  required
  type="text"
  name="landMark"
  value={empinfo.landMark}
  onChange={handleEmployeeInfoChange}
  placeholder="Last name"
  
/>
  </Col>
</Row>

<Row>
  <Col md={4}>
<Form.Label className='my-label'>state</Form.Label>
<Form.Select
  required
  aria-label="Default select example"
  name="state"
  value={empinfo.state}
  onChange={handleEmployeeInfoChange}
  
>
    <option disabled selected>
        Choose State
    </option>
    {stateSelection.map((states)=>{
        <option>{states}</option>
    })}

</Form.Select>
  </Col>
  <Col md={4}>
<Form.Label className='my-label'>city</Form.Label>
<Form.Control
  required
  type="text"
  name="city"
  value={empinfo.city}
  onChange={handleEmployeeInfoChange}
  placeholder="Enter city"
  
/>
  </Col>
  <Col md={4}>
<Form.Label className='my-label'>Pin Code</Form.Label>
<Form.Control
  required
  type="number"
  name="pincode"
  value={empinfo.pincode}
  onChange={handleEmployeeInfoChange}
  placeholder="Enter Pincode"
  
/>
  </Col>
</Row>




  </Card.Body>


</Card>

 <Card className='mb-5'>
         
  <Card.Body>
   <Card.Title>Family Member Details</Card.Title>
   <Row>
  <Col>
<Form.Label className='my-label'>mobile</Form.Label>
<Form.Control
  required
  type="text"
  name="mobile"
  value={empinfo.mobile}
  onChange={handleEmployeeInfoChange}
  placeholder="Last name"
  
/>
  </Col>
</Row>
  </Card.Body>


</Card> 

 
       
    </div>
  )
}
