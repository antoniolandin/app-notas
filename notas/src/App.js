import './App.css';
import NoteList from './componentes/NotesList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Search from './componentes/Search';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Por aquí te dejo unas notas de ejemplo",
      date: "19/11/2023",
    },
    {
      id: nanoid(),
      text: "Comprar pan",
      date: "12/11/2021",
    },
    {
      id: nanoid(),
      text: "Comprar leche",
      date: "12/11/2021",
    },
    {
      id: nanoid(),
      text: "Comprar huevos",
      date: "12/11/2021",
    },
    {
      id: nanoid(),
      text: "Ver la serie de Loki",
      date: "12/11/2021",
    }
  ]);

  const [searchText, setSearchText] = useState('');

  // Obtenemos las notas del localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notas')); // Obtenemos las notas del localStorage

    if(savedNotes) // Si hay notas guardadas en el localStorage
    {
      setNotes(savedNotes);
    }
  }, []); // Se ejecuta solo una vez (cuando se carga la pagina por primera vez)

  // Guardamos las notas en el localStorage
  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notes)); // Guardamos las notas en el localStorage
  }, [notes]);

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

      <Search handleSearchNote={setSearchText}/>

      <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
