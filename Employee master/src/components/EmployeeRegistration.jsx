import React from 'react'
import {Row,Col,Button,Container,Form,InputGroup} from "react-bootstrap";
import { useState,useEffect } from 'react';
import {useNavigate,useLocation,Link} from "react-router-dom";
import {useDispatch} from "react-redux"
import { EmployeeInformation } from './EmployeeInformation';



const EmployeeRegistration = () => {

    const dispacth =useDispatch();
    const navigate = useNavigate();
    const location=useLocation();

    const initalResidenceDetail={
            houseNo:"",
            street:"",
            landMark:"",
            state:"",
            city:"",
            pincode:"",
    }
    const initalPermanentDetail={
        houseNo:"",
        street:"",
        landMark:"",
        state:"",
        city:"",
        pincode:"",
}

  const initalFamilyDetail={
    relationShip:"",
    fullName:"",
    dateOfBirth:"",
    mobileNo:"",
    additionalNotes:"",
}

  const [employeeDetail,setEmployeeDetail]=useState(
    {
        
    fullName :"",
    gender:"",
    nameOfJoining:"", 
    fatherName:"",
    motherName:"",
    dateOfBirth:"",
    bloodGroup:"",
    mobile:"",
    email:"",
    employeeInfo:{
        residenceDetail:{...initalResidenceDetail},
        permanentDetail:{...initalPermanentDetail},
    },
    familyDetails:[{...initalFamilyDetail}]

    }
  )

   const [validated ,setValidated]=useState(false);


   useEffect(()=>{
    if(location.state){
        setEmployeeDetail(location.state.data)
    }
   },[])


   const handleChange=(e)=>{

    let strEmployeeDetails =JSON.stringify(employeeDetail);
    let tempEmployeeDetails=JSON.parse(strEmployeeDetails)
    tempEmployeeDetails[e.target.name]=e.target.value;
    console.log(tempEmployeeDetails);
    setEmployeeDetail(tempEmployeeDetails);

   }

   const handleEmployeeInfoChange=(e,index)=>{
    let strEmployeeDetails =JSON.stringify(employeeDetail);
    let tempEmployeeDetails=JSON.parse(strEmployeeDetails)
    tempEmployeeDetails.employeeInfo[index][e.target.name] = e.target.value;
    setEmployeeDetail(tempEmployeeDetails)


   }

//    const onAddEmployee=()=>
//    {
//     let strEmployeeDetails =JSON.stringify(employeeDetail);
//     let tempEmployeeDetails=JSON.parse(strEmployeeDetails)
//     tempEmployeeDetails.employeeInfo.push(initalResidenceDetail,initalPermanentDetail,initalFamilyDetail);
//      setEmployeeDetail(tempEmployeeDetails)
//    }

   const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
     else{
        if(location.state){
            dispacth({type:"update",payload:{index:location.state.index,data:employeeDetail}})
        }
        else{
            dispacth({type:"add",payload:employeeDetail})
        }

        navigate("/");
     }


    setValidated(true);
  };

  return (
     <Container>
   <h3 className='mt-3'>Employee Registration</h3>
   <div className='mt-5'>
   <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="">
          <Form.Label className='my-label'>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="fullName"
            value={employeeDetail.fullName}
            placeholder="First name"
            onChange={handleChange}
          
          />
         <Form.Control.Feedback type="invalid">
              First Name required.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="">
          <Form.Label className='my-label'>Gender</Form.Label>


          {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Male"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            onChange={handleChange}
            checked
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            onChange={handleChange}
          />

        </div>
      ))}
          {/* <Form.Control
            required
            type="text"
            name="gender"
            value={employeeDetail.gender}
            placeholder="Last name"
            
          /> */}
          <Form.Control.Feedback type="invalid">
             Gender required
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="">
          <Form.Label className='my-label'>Name Of Joining</Form.Label>
           
            <Form.Control
              type="date"
              name="nameOfJoining"
              value={employeeDetail.nameOfJoining}
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Name of joining required
            </Form.Control.Feedback>
          
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="">
          <Form.Label className='my-label'>Father Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="fatherName"
            value={employeeDetail.fatherName}
            placeholder="First name"
            onChange={handleChange}
          
          />
         <Form.Control.Feedback type="invalid">
              Father Name required.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="">
          <Form.Label className='my-label'>Mother Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="motherName"
            value={employeeDetail.motherName}
            placeholder="Last name"
            onChange={handleChange}
            
          />
          <Form.Control.Feedback type="invalid">
             Mother Name required
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="">
          <Form.Label className='my-label'>Date Of Birth</Form.Label>
        
            <Form.Control
              type="date"
              name="dateOfBirth"
              value={employeeDetail.dateOfBirth}
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
             Date Of Birth required
            </Form.Control.Feedback>
          
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="">
          <Form.Label className='my-label'>Blood Group</Form.Label>
          <Form.Control
            required
            type="text"
            name="bloodGroup"
            value={employeeDetail.bloodGroup}
            onChange={handleChange}
            placeholder="First name"
          
          />
         <Form.Control.Feedback type="invalid">
              Blood Group required.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="">
          <Form.Label className='my-label'>Mobile</Form.Label>
          <Form.Control
            required
            type="number"
            name="mobile"
            value={employeeDetail.mobile}
            onChange={handleChange}
            placeholder="Last name"
            
          />
          <Form.Control.Feedback type="invalid">
             mobile No required
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="">
          <Form.Label className='my-label'>Email</Form.Label>
        
            <Form.Control
              type="text"
              name="email"
              value={employeeDetail.email}
              placeholder="email"
              aria-describedby="inputGroupPrepend"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Name of joining required
            </Form.Control.Feedback>
         
        </Form.Group>
      </Row>

      <Row className='mb-2'>
        <Col>
          <div className='mt-3'>
          <h3>Employee information</h3>
           
           {Object.keys(employeeDetail.employeeInfo).map(function(empinfo,index){
             return <EmployeeInformation
             key={index}
             empinfo={empinfo}
             handleChange={(e)=> {handleEmployeeInfoChange(e,index)}}
             
             
             />

           })}
          </div>
          
        </Col>
      </Row>
      
      <Button type="submit" className='m-2' >Submit</Button>
      <Link to="/" className='btn btn-danger'>Cancel</Link>
    </Form>
   </div>
   
     </Container>

    
  )
}   

export default EmployeeRegistration