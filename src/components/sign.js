import React from 'react'
import './sign.css';

export default function Sign() {
    
      
    
      
    return (
        <div>
            
            <div class="form-popup" style={{display:'none',backgroundColor:'brown'}} id="myForm">
                <form action="#" class="form-container">
                    <h1>Login</h1>

                    <label ><b>Email</b></label>
                    <input type="text" placeholder="Enter Email"  />

                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" />

                            <button type="submit" class="btn">Login</button>
                            <button type="submit" class="btn cancel" onclick={() => {document.getElementById("myForm").style.display = "none";document.getElementsByTagName("body").style.opacity("80%")}} >Close</button>
  </form>
</div>
        </div>
                )
}
