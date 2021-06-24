import React from 'react'
import trash from './images/trash.png'
export default function Notes(props) {

    console.log("Notes")

    const clicked = () => {
        
        props.openCard(props.id,props.title,props.content);
        // let title = document.getElementById("noteTitle").style.backgroundColor = props.bgColor;
        // console.log(props.bgColor,"note color")
        // console.log(props.font,"note font")
        // console.log(props.bgColor,"note bgColor")
        // console.log(props.id)
        
        
    }

    const delBtn = () => {
         props.delNote(props.id)
        
    }

    return (
        <div>
        <div className="card" id={props.id} style={{color:props.color,fontFamily:props.font,backgroundColor:props.bgColor}} onClick={clicked} >
                        <div className="cardTitle">
                            <h3 >{props.title}</h3>
                            </div>

                        <div className="cardContent">
                            {props.content}
                        </div>

            </div>
            <button id="noteButton" onClick={delBtn}><img height="20px" src={trash} alt="" /></button>
            </div>
       
    )
}
