import React from 'react'
import './nav.css'
import notes from "./images/notes.png"

export default function Nav() {
    return (
        <nav className="navBar">
            
                <ul className="nav-left">
                    <li><img class = "logo" src={notes} alt="" /></li>
                    <li><a href="#">Font color</a></li>
                </ul>
            
            
                {/* <ul className="nav-right">

                    <li><a href="#">Dark</a></li>
                    <li><a href="#">Light</a></li>
                </ul> */}
            
        </nav>
    )
}
