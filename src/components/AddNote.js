import React from 'react'
import {useState} from 'react';
import './AddNote.css'
import submit from './images/submit.png'
import enter from './images/enter.png'

export default function AddNote(props) {
    
    console.log("Addnote")
    
    
   
    
    let [title,setTitle] = useState("");
    let [content,setContent] = useState("");
    let [styles,setStyles] = useState("");


    
    
     styles = {
        color:props.lots.color,
        backgroundColor:props.lots.bgColor,
        fontFamily:props.lots.font,
        

    }
  
    


    const btnClick = () => {
        props.addNote(
            {
                title:title?title:"no title",
                content:content?content:"no content",
                
                
    
            }
        )
        setTitle("");
        setContent("");
        
       
        
        
    }
    

    return (
        <section className="addNoteContainer">
            <div className="addNote" >

            <h2 id = "addNoteTitle" > <b>Add Note</b> </h2>
            <input type="text" value={title} style={styles} id="noteTitle" onChange={(e) => {setTitle(e.target.value)}} placeholder="Title here"className="noteTitle"/>
            <textarea name=""  value={content} style={styles} onChange={(e) => {setContent(e.target.value)}} placeholder="Your Note here" id="textArea" ></textarea>
            <button className="addBtn" onClick={btnClick} ><img height="30x" src={enter} alt="" /></button>
            </div>
           
        </section>
    )
}
