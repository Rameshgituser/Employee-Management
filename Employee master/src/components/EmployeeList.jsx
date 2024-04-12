
import React from 'react'
import {useSelector} from "react-redux"
// import {Link,useNavigate} from "react-router-dom;"
import { Link,useNavigate } from 'react-router-dom';
import { Table, Row, Col, Container, Button } from 'react-bootstrap';

const EmployeeList = () => {

    const state=useSelector(state=>state);

     const navigate=useNavigate();
   
     const onEdit =(index)=>{
        navigate("/EmployeeRegistration",{
            state:{
                index:index,
                data:state.employeeList[index]
            }
        })
     } 
        


  return (
    <Container>
           <h2>EmployeeList</h2>

           <Row>

            <Col>
            <Link to={"/EmployeeRegistration"} className="btn btn-info float-end">Add Employee</Link>
            </Col>
           </Row>

         <Table responsive>
            <thead>
           <tr>
                <th>Full name</th>
                <th>Gender</th>
                <th>Name Of Joining</th>
                <th>Father Name</th>
                <th>Mother Name</th>
                <th>Date Of Birth</th>
                <th>Blood Group</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Option</th>
                </tr>
                         

            </thead>

            <tbody>

                {state.employeeList?.map(function(row,index) {
                    console.log(EmployeeList);  
                        return(

                           <tr key={index}>

                              <td>{row?.fullName}</td>
                              <td>{row?.gender}</td>
                              <td>{row?.nameOfJoining}</td> 
                              <td>{row?.fatherName}</td> 
                              <td>{row?.motherName}</td> 
                              <td>{row?.dateOfBirth}</td> 
                              <td>{row?.bloodGroup}</td> 
                              <td>{row?.mobile}</td> 
                              <td>{row?.email}</td> 
                              <td>

                                <Button className='btn btn-success'  onClick={(e)=>{
                                    onEdit(index)
                                }}>
                                    Edit
                                </Button>
                              </td>
                           </tr>

                        )
                })}
                {state.EmployeeList?.length === 0 && <tr><td colSpan={10}>No Data Found</td></tr>}
            </tbody>
   
         </Table>
    </Container>
    
   

  )
}

export default EmployeeList