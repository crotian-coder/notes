import React from 'react'
import {useState} from 'react';
import './AddNote.css'

export default function AddNote(props) {
    let [title,setTitle] = useState("");
    let [content,setContent] = useState("");

    const btnClick = () => {
        props.addNote(
            {
                title:title,
                content:content,
    
            }
        )
        setTitle("");
        setContent("");
        
        
    }
    

    return (
        <section className="addNoteContainer">
            <div className="addNote" >

            <h2>Add Note</h2>
            <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Title here"className="noteTitle"/>
            <textarea name="" value={content} onChange={(e) => {setContent(e.target.value)}} placeholder="Your Note here" id="textArea" ></textarea>
            <button className="addBtn" onClick={btnClick} ><b>Submit</b></button>
            </div>
           
        </section>
    )
}
