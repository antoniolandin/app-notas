import Note from "./Note";
import NoteEditor from "./NoteEditor";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return(
        <div className="notes-list">
            {notes.map((note) => (
            <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
            ))}
            <NoteEditor handleAddNote={handleAddNote}/>
        </div>
    )
};

export default NoteList;