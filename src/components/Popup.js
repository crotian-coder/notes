import React from 'react'
import './sign.css'
import {useState} from 'react';
export default function Popup(props) {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const signUp = () => {
        props.addUser(username,password);
        setUsername("");
        setPassword("");
        

    }

    let signUpContent = <div action="#" class="form-container">
    <hr />
        <h1 style={{marginLeft:"10px",marginTop:"10px",display:"block",textAlign:'center'}}>Login</h1>

        <label ><b>Email</b></label>
        <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} placeholder="Username"  />

            <label ><b>Password</b></label>
            <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" />
                <div className="box" style={{display:'flex',flexDirection:"row",justifyContent:"space-around"}} >
                <button type="submit" class="btn">Login</button>
                <button type="submit" class="btn" onClick={signUp} style={{backgroundColor:"red"}}>Sign up</button>

                </div>
                
        </div>

    if(props.trigger){
        return(<div>
            
            <div class="form-popup" style={{textAlign:"center",backgroundColor:'brown'}} id="myForm">
                <button onClick={props.close} style={{ display:"block",float:'right',boxShadow:"1px 1px 1px 1px rgb(59, 52, 52)",border:"none",fontFamily:"cursive",color:"white",borderRadius:"6px",backgroundColor:"red",margin:"5px"}} >close</button>
                {/* <button onClick={props.close} style={{ display:"block",float:'right',boxShadow:"1px 1px 1px 1px rgb(59, 52, 52)",border:"none",fontFamily:"cursive",color:"white",borderRadius:"6px",backgroundColor:"red",margin:"5px"}} >Sign up</button> */}
                {signUpContent}
                
  
</div>
        </div>)
    }
    else{
        return "";
    }
}
