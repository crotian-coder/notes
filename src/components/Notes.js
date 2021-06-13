import React from 'react'

export default function Notes(props) {
    return (
        
            <div className="card" id={props.id} onClick={props.clicked}>
                        <div className="cardTitle">{props.title ? props.title:"no title"}</div>
                        <div className="cardContent">
                            {props.content?props.content:"no content"}
                        </div>
            </div>
       
    )
}
