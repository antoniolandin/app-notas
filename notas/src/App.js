import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteList from './componentes/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';

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

  return (
    <div className="container">
      <NoteList notes={notes}/>
    </div>
  );

}

export default App;
