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
            <textarea rows="8" cols="10" placeholder="Type to add a note..." onChange={handleChange} value={noteText} className="txt-new"></textarea>
            <div className="note-footer">
                <small>200 remaining</small>
                <button class="btn btn-primary" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;