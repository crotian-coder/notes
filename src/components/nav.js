import React from 'react'
import notes from './images/notes.png'
import './nav.css';

export default function nav(props) {

    console.log("nav")

    const chColor = (color) => {
            props.chColor(color);
    }
    const chFont = (font) => {
            props.chFont(font);
    }

    const chBgColor = (color) => {
      props.chBgColor(color);
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img height = "30px"src={notes} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <b>Font color</b>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{textAlign:"center"}}>
            <li><a className="dropdown-item" style = {{color:"black",} } onClick={() => {chColor("black")}} href="#"> <b>black</b> </a></li>
            <li><a className="dropdown-item" style = {{color:"blue",} } onClick={() => {chColor("blue")}} href="#"><b>blue</b></a></li>
            
            <li><a className="dropdown-item" style = {{color:"green",} } onClick={() => {chColor("green")}} href="#"><b>green</b></a></li>
            <li><a className="dropdown-item" style = {{color:"red",} } onClick={() => {chColor("red")}} href="#"><b>red</b></a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <b>Font style</b>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" onClick={() => {chFont("Viaoda Libre")}} style={{fontFamily:'Viaoda Libre',}} href="#">Viaoda Libre</a></li>
            <li><a className="dropdown-item" onClick={() => {chFont("Oswald")}} style={{fontFamily:'Oswald',}} href="#">Oswald</a></li>
            
            <li><a className="dropdown-item" onClick={() => {chFont("Pacifico")}} style={{fontFamily:'Pacifico',}} href="#">Pacifico</a></li>
            <li><a className="dropdown-item" onClick={() => {chFont("Patrick Hand")}} style={{fontFamily:'Patrick Hand',}} href="#">Patrick Hand</a></li>
            <li><a className="dropdown-item" onClick={() => {chFont("cursive")}} style={{fontFamily:'cursive',}} href="#">bold cursive</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <b>Background color</b>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" onClick={() => {chBgColor("white")}} style={{fontFamily:'cursive',color:"black"}} href="#">white</a></li>
            <li><a className="dropdown-item" onClick={() => {chBgColor("rgb(104, 132, 218)")}} style={{fontFamily:'cursive',color:"rgb(104, 132, 218)"}} href="#">Light blue </a></li>
            <li><a className="dropdown-item" onClick={() => {chBgColor("crimson")}} style={{fontFamily:'cursive',color:"crimson"}} href="#">crimson </a></li>
            <li><a className="dropdown-item" onClick={() => {chBgColor("lawngreen")}} style={{fontFamily:'cursive',color:"lawngreen"}} href="#">lawn green </a></li>
            <li><a className="dropdown-item" onClick={() => {chBgColor("yellow")}} style={{fontFamily:'cursive',color:"yellow"}} href="#">Yellow </a></li>
            <li><a className="dropdown-item" onClick={() => {chBgColor("orange")}} style={{fontFamily:'cursive',color:"orange"}} href="#">Orange </a></li>
            
          </ul>
        </li>
        
      </ul>
      <form class="form-inline my-2 my-lg-0" style={{display:'flex',flexDirection:'row',position:'relative',right:"20px"}} id="Search-Bar">
      <input style={{margin:"0 20px"}} id="nav-searchBar" onChange={(e) => {props.search(e.target.value)}}  class="form-control mr-sm-2" type="search" placeholder="Search Notes" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      
    </form>
      <button onClick={props.signOpen} style={{ color:"white",fontFamily:"cursive",backgroundColor:"tomato",borderRadius:"4px",padding:"6px 10px"}} type="submit">Sign in</button>
      
    </div>
  </div>
</nav>
        </div>
    )
}
