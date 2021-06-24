import React from 'react'
import './YourNotes.css'
import Notes from './Notes'
import close from './images/close.png'
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
            <Notes  id={note.id} openCard = {props.openCard} closeCard = {props.closeCard} title={note.title} delNote = {props.delNote} content={note.content} color = {note.color} font = {note.font} bgColor = {note.bgColor} clicked={props.editNote}/>
        )
}):"Nothing to show here";
    let showNothing = <div style={{width:"100%"}}>
        <div className="zoomCardHolder"   style={{padding:"20px",height:"100%"}} >

        <div className="zoom-card" contentEditable="true" style={{backgroundColor:"red",outline:"none",boxShadow:"2px 2px 3px 3px rgb(59, 52, 52)",borderRadius:"10px",width:"100%",height:"100%",padding:"10px"}}>
        <button onClick={props.closeCard} contentEditable="false" style={{fontFamily:"cursive",color:"white",borderRadius:"7px",backgroundColor:"red",float:"right",boxShadow:"2px 2px 1px 1px rgb(59, 52, 52)",border:"none"}} >Exit</button>
        <button onClick={props.saveCard} contentEditable="false" style={{fontFamily:"cursive",color:"white",borderRadius:"7px",backgroundColor:"green",float:"right",boxShadow:"2px 2px 1px 1px rgb(59, 52, 52)",border:"none"}} >Save</button>

            <br />
            <h2 className="zoomCardTitle"  >{props.zoomCard.title?props.zoomCard.title:"no title"}</h2>
            <div className="zoomCardContent" style={{textAlign:"left",}}>
                    {props.zoomCard.content?props.zoomCard.content:"no content"}
            </div>
        </div>
        </div>
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
