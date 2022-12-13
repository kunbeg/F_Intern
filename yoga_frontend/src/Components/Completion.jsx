import React,{useState,useEffect}from 'react'
import './Completion.css'
import paymentComplete from './../paymentComplete.PNG'
function Completion() {
    
    //After completion of payment just return to homepage
    const ReturnToHome=()=>{
        window.location.reload()
    }
    let name = localStorage.getItem("name");
    let age = localStorage.getItem("age");
    let startDate = localStorage.getItem("startDate");
    const showBatch = () => {
        let batchNo = parseInt(localStorage.getItem("batchNumber"));
        if (batchNo == 1) {
            return "6 AM-7 AM";
        } else if (batchNo == 2) {
            return "7 AM-8 AM";
        } else if (batchNo == 3) {
            return "8 AM-9 AM";
        } else {
            return "5 PM-6 PM";
        }
    }
    
    return (
      <div className="completionContainer">
        <img src={paymentComplete} />
        <h>Payment Complete</h>
        <div className="details">
          <h>Name : {name} </h>
          <h>Age : {age} years </h>
          <h>Start Date : {startDate} </h>
          <h>Batch : {showBatch()} </h>
          <h>Fees Paid : 500 Rs. </h>
        </div>
        <button type="button" onClick={ReturnToHome}>
          Return to home <i class="fas fa-home"></i>
        </button>
      </div>
    );
}

export default Completion
