import './App.css';
import Nav from './components/nav';
import AddNote from './components/AddNote';
import YourNotes from './components/YourNotes';
import {useState} from 'react';

var Data = {
  Notes:[
    ]
}

function App() {
  let [notes,setNotes] = useState([{id:0,title:"demo",content:"maki"}]);

  const updateData = (note) => {

      

      note.id = notes[notes.length-1] + 1;
      setNotes([...notes,note])
      console.log(notes)


  }
  

  return (
    <div className="App">
      <Nav/>
      <AddNote addNote = {updateData}/>
      <YourNotes notes={notes} />
      
    </div>
  );
}

export default App;
