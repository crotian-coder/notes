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
     let show;
    
     
  
    return (
        <section className="YourNotesContainer">
            

            <h2 style={{color:"red"}} className="yourNotesTitle">Your Notes</h2>
            
            <input type="text" placeholder = "search notes" className="searchNotes" />
           
            
            
            <br />
                <div className="cardHolder">
                    
                {props.notes?props.notes.map((note) => {
                        return(
                            <Notes id={note.id} title={note.title} content={note.content}/>
                        )
                }):"Nothing to show here"}
                </div>
        </section>
    )
}
