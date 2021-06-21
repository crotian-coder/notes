import './App.css';
import Nav from './components/nav';
import AddNote from './components/AddNote';
import YourNotes from './components/YourNotes';
import {useState} from 'react';
import Sign from './components/sign';
import Popup from './components/Popup';

var Data = {
  Notes:[{author:"Notes",id:0,title:"demo",content:`Lorem ipsum dolor sit, amet consectetur 
  adipisicing elit. Ullam, excepturi? Ducimus voluptates 
  sed repellendus alias sapiente nisi et dicta
   commodi ea temporibus, quo suscipit, dolores
    quos delectus tempora facere rerum rem culpa 
    impedit enim
   natus? Quae perferendis eius velit quidem.`,color:"black",font:"Pacifico",bgColor:"rgb(104, 132, 218)"}],
  Notes2:[{
    author:"Notes2",id:0,title:"demo",content:`Lorem ipsum dolor sit, amet consectetur 
  adipisicing elit. Ullam, excepturi? Ducimus voluptates 
  sed repellendus alias sapiente nisi et dicta
   commodi ea temporibus, quo suscipit, dolores
    quos delectus tempora facere rerum rem culpa 
    impedit enim
   natus? Quae perferendis eius velit quidem.`,color:"black",font:"Pacifico"
  }]
}

var UserData = {
  username:{
    password:"98abcd",
    Notes:[{author:"Notes",id:0,title:"demo",content:`Lorem ipsum dolor sit, amet consectetur 
    adipisicing elit. Ullam, excepturi? Ducimus voluptates 
    sed repellendus alias sapiente nisi et dicta
     commodi ea temporibus, quo suscipit, dolores
      quos delectus tempora facere rerum rem culpa 
      impedit enim
     natus? Quae perferendis eius velit quidem.`,color:"black",font:"Pacifico"}]
  }
}

function App() {
  let presentUserNotes = UserData.username.Notes;
  let presentAuthor = "Sign in";
  let [notes,setNotes] = useState(presentUserNotes);


  var countId = 0;

  
  
 
  

  const [noteProps,setNoteProps] = useState({color:"black",bgColor:"white",font:"Pacifico"});
  const [notesClicked,setNotesClicked] = useState(0)
  const [lots,setLots] = useState({title:"",content:"",color:"black",bgColor:"white",font:"Pacifico"})

  const editNote = () => {
      
      // let a = document.getElementById("noteTitle");
      // let b = document.getElementById("textArea");
      // a.value = title;
      
      // b.value = content;
      // b.style.textAlign = "left";
      // let change = noteProps;
      // change.color = color;
      // change.bgColor = bgColor;
      // change.font = font;
    //   document.getElementById("noteTitle").style.color = color;
    //   document.getElementById("textArea").style.color = color;
    //   document.getElementById("noteTitle").style.fontFamily = font;
    //   document.getElementById("textArea").style.fontFamily = font;
    //   document.getElementById("noteTitle").style.backgroundColor = bgColor;
    // document.getElementById("textArea").style.backgroundColor = bgColor;
      // setNoteProps(change);
      // setNotesClicked(notesClicked + 1)
      console.log("note clicked")
      
      window.scrollTo(0,0)
      // console.log(noteProps,"present bg")


  }
  

  const [signDisplay,setSignDisplay] = useState(false);

  const searchNotes = (searchValue) => {
    window.scrollTo(1000,400)
    searchValue = searchValue.toLowerCase();
    setNotes(
      presentUserNotes.filter(
        (note) => {
          if(note.title.includes(searchValue) || note.content.includes(searchValue) ){
            return note;
          }
        }
      )
    )
  }

  const changeNoteColor = (color) => {
    let change = noteProps;
    change.color = color;
    document.getElementById("noteTitle").style.color = color;
    document.getElementById("textArea").style.color = color;
    
    
    setNoteProps(change);
  }
  const changeNoteFont = (font) => {
    let change = noteProps;
    change.font = font;
    
    document.getElementById("noteTitle").style.fontFamily = font;
    document.getElementById("textArea").style.fontFamily = font;
    
    setNoteProps(change);
  }
  
  const changeNoteBgColor = (color) => {
    let change = noteProps;
    noteProps.bgColor = color;
    
    document.getElementById("noteTitle").style.backgroundColor = color;
    document.getElementById("textArea").style.backgroundColor = color;
    setNoteProps(change);
  }
  const updateData = (note) => {
    
    note.color = noteProps.color;
    note.font = noteProps.font;
    note.bgColor = noteProps.bgColor;
    note.id = notes.length;
    console.log(note.id )
    let Notes = [...notes,note];
    presentUserNotes = Notes;

    
    setNotes(Notes)
    setLots({title:"",content:"",color:"black",bgColor:"white",font:"Pacifico"})
    // console.log(notes)
    window.scrollTo(1000,400)
}

const addUser = (username,password) => {
  console.log(username,password)

}
const openForm = () => {
  document.getElementById("myForm").style.display = "block";
}

const closeForm = () => {
  // document.getElementById("myForm").style.display = "none";
  // document.getElementsByTagName("body").style.opacity("80%");

  console.log("success")
}
const [popUp,setPopUp] = useState(true);
const closePopUp = () => {
  setPopUp(false)
}
const openPopUp = () => {
  setPopUp(true)
}
const [cardClick,setCardClick] = useState(true);
const openCard = () => {
  setCardClick(false);
  console.log("yess")
}
const closeCard = () => {
  setCardClick(true);
}
const delNote = (id) => {
  console.log("delete this",id)
  let newNotes = notes.filter(
      (note) => {
        if(note.id !== id){
          return note;
        }
      }
    )
  console.log(newNotes)
  // presentUserNotes = newNotes;
  setNotes(newNotes)
  console.log(id)
  
  
  

}

  return (
    <div className="App">
      <Sign closeForm={closeForm}/>
      <Popup trigger={popUp} close={closePopUp} addUser={addUser}/>
        
      <Nav  signOpen={openPopUp} chBgColor = {changeNoteBgColor} chColor = {changeNoteColor} presentUser={presentAuthor} chFont = {changeNoteFont} search={searchNotes} />
      
      <AddNote addNote = {updateData} lots={lots} noteProps={noteProps}/>
      <YourNotes  cardClick={cardClick} openCard={openCard} closeCard = {closeCard} notes={notes} search={searchNotes} delNote={delNote} editNote={editNote}/>
      
    </div>
  );
}

export default App;
