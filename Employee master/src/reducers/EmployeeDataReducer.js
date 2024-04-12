
// const EmployeeInitialValues = {
   
//     fullName :"",
//     gender:"",
//     nameOfJoining:"", 
//     fatherName:"",
//     motherName:"",
//     dateOfBirth:"",
//     bloodGroup:"",
//     mobile:"",
//     email:"",
//     residenceAddress:[
//         {
//             houseNo:"",
//             street:"",
//             landMark:"",
//             state:"",
//             city:"",
//             pincode:"",
//         }
//     ],

//     permanentAddress:[
//         {
//             houseNo:"",
//             street:"",
//             landMark:"",
//             state:"",
//             city:"",
//             pincode:"",
//         }
//     ],

//     familyMembers:[
//         {

//             relationShip:"",
//             fullName:"",
//             dateOfBirth:"",
//             mobileNo:"",
//             additionalNotes:"",
//         }
//     ],
// }

 //add data to state

  //{type:"add",payload{...employeeDetatils}}

  //Update data to state

  //{type:"update",payload:{index:0,data:{...employeeDetails}}} 

 const initialEmployeeData=[];

  const EmployeeDataReduser =(state = initialEmployeeData,actions) =>{  

     switch(actions.type){

        case "add":
            return [...state,actions.payload]

        case "update":
            let tememp =[...state]
            tememp[actions.payload.index]=actions.payload.data;
            return tememp;

            default:
                return state;
     }
  }

  export default EmployeeDataReduser;