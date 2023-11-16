import { MdDeleteForever } from "react-icons/md";

const Note = () => {
    return (
        <div className="note">  
            <span>Primera nota</span>

            <div className="note-footer">
                <small>16/11/2023</small>
                <MdDeleteForever className="delete-icon" size="1.3em"/>
            </div>

        </div>
    )
};

export default Note;