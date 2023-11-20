import { useState } from "react";

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    }

    const handleSaveClick = () => {

        if(noteText.trim().length > 0)
        {
            handleAddNote(noteText);
            setNoteText(''); // Resetear el form cuando se añada una nueva nota
        }
    }

    return(
        <div className="note new">
            <textarea rows="8" cols="10" placeholder="Escribe tu nota..." onChange={handleChange} value={noteText} className="txt-new"></textarea>
            <div className="note-footer">
                <small>{noteText.length} Carácteres</small>
                <button class="btn btn-primary" onClick={handleSaveClick}>Guardar</button>
            </div>
        </div>
    );
};

export default AddNote;