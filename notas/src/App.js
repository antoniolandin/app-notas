import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteList from './componentes/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import AddNote from './componentes/AddNote';

function App() {

  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note!",
    date: "17/11/2023",
    },
    {
      id: nanoid(),
      text: "This is my seccond note!",
      date: "13/11/2023",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "12/11/2023",
    }
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id)); // Seteamos las notas a un array sin la nota que eliminamos
  }


  return (
    <div className="container">
      <NoteList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  );

}

export default App;
