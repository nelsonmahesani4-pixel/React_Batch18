// import Product from "./pages/Product";
// import Routing from "./route/Routing";
// import "./App.css";
// function App() {
//   return (
//     <div className="App">

//       {/* product data
      
//       <Routing/>
//        */}

//     </div>
//   );
// } 

// export default App;

// // Without useState functional component
// import React from 'react'

// function App() {
  
// let MyName = "Rohit"

// function upDateName(){
//   MyName = "Rohit Kumar"
//   console.log(" Name Updated  : ", MyName)
// }
// console.log(" Before Update Name : ", MyName)
// upDateName()

// function handleChange(e){
//   console.log("Change ", e.target.value)
//   MyName = e.target.value;
//   console.log(" My Name Updated  : ", MyName)
// }
//   return (
//     <div>
//       <h1>{MyName}</h1>
//       <h1>{"Updated" +  MyName}</h1>

//       <input type="text" placeholder='Enter Name' onChange={(abd)=>handleChange(abd)} />
//       <button onClick={()=>upDateName()}>Update Name</button>
      
//     </div>
//   ) 
// }

// export default App


// --> useState functional component
import React from 'react'
import { useState } from 'react'


function App() { 
  const myStyle = {
        backgroundColor : "green",
        color : "white",
        padding : "10px",
        borderRadius : "5px",
        border : "none",
        cursor : "pointer"
       }

       const [myName, setMyName] = useState("Nelson");
       function handleChange(e){
        setMyName(e.target.value)
        console.log("Change ", e.target.value)
       }
       

  return (
    <div>
      <h1>{myName}</h1>
      <br />

      <button
        onClick={()=>setMyName(myName +"Mahesani")}
        style={myStyle}
      >Update</button>
      <br />
      <input type="text" placeholder='Enter Name' onChange={(e)=>handleChange(e)} />
    </div>
  )
}

export default App
