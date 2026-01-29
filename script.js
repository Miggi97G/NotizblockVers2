let notes = [];
let trashNotes = [];

function renderNotes() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentDiv.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes() {
    const trashContentDiv = document.getElementById('trashContent');
    trashContentDiv.innerHTML = '';
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentDiv.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value

    notes.push(noteInput);
    renderNotes();

    noteInputRef.value = '';
}

function pushToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    
    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexNote) {
    trashNotes.splice(indexNote, 1);
    renderTrashNotes();
}


//Notizen global speichern

//Erledigt Button
//Erledigt Bereich
//Notizen verschiebn (Drag and Drop)
//Notizen bearbeiten
//Notizen suchen
//Notiz Datum (erstellt am)
//Papierkorb, wird nach 30 tagen gelöscht