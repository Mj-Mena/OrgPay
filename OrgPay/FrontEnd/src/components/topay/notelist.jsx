// notelist.jsx
import React, { useState } from 'react';
import Note from './topay';
import "./topay.css";
import Sidebar from '../sidebar/sidebar';

const NotesList = () => {
    const [notes, setNotes] = useState([]);

    const handleSaveNote = (newNote) => {
        setNotes([...notes, newNote]);
    };

    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <h5>PL</h5>
                <div className='notes-list'>
                    {notes.map((note, index) => (
                        <Note key={index} onSave={handleSaveNote} />
                    ))}
                    <button className="butones" onClick={() => setNotes([...notes, {}])}>
                        Add Note
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotesList;
