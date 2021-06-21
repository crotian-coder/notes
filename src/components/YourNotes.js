import React from 'react'
import './YourNotes.css'
import Notes from './Notes'
export default function YourNotes(props) {
    let content = `Lorem ipsum dolor sit, amet consectetur 
    adipisicing elit. Ullam, excepturi? Ducimus voluptates 
    sed repellendus alias sapiente nisi et dicta
     commodi ea temporibus, quo suscipit, dolores
      quos delectus tempora facere rerum rem culpa 
      impedit enim
     natus? Quae perferendis eius velit quidem.`
     let title = "title";
     let showit = false;
     let showNotes =  props.notes?props.notes.map((note) => {
        return(
            <Notes id={note.id} openCard = {props.openCard} closeCard = {props.closeCard} title={note.title} delNote = {props.delNote} content={note.content} color = {note.color} font = {note.font} bgColor = {note.bgColor} clicked={props.editNote}/>
        )
}):"Nothing to show here";
    let showNothing = <div>
        <button onClick={props.closeCard} >Close</button>
    </div>
    console.log(props.cardClick)
    
   
  
    return (
        <section className="YourNotesContainer">
            

            <h2  className="yourNotesTitle" >Your Notes</h2>
            
            <input type="text" onChange={(e) => {props.search(e.target.value)}} placeholder = "search notes" className="searchNotes" />
           
            
            
            <br />
                <div className="cardHolder">
                    {props.cardClick?showNotes:showNothing}
               
                </div>
        </section>
    )
}
