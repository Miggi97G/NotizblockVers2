function init(index) {
    
    renderNotes();
    loadFromLocalStorage();
}

let notes = [];

function renderNotes() {
    const contentDiv = document.getElementById('notesList');
    contentDiv.innerHTML = '';
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentDiv.innerHTML += getNoteTemplate(indexNote);
    }
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value

    saveToLocalStorage();

    notes.push(noteInput);
    renderNotes();

    noteInputRef.value = '';
}




//Notizen global speichern

//Erledigt Button
//Erledigt Bereich
//Notizen verschiebn (Drag and Drop)
//Notizen bearbeiten
//Notizen suchen
//Notiz Datum (erstellt am)
//Papierkorb, wird nach 30 tagen gelöscht