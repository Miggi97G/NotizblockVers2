//Notizen global speichern
//Notizen Hinzufügen
//Notizen löschen

//Erledigt Button
//Erledigt Bereich
//Notizen verschiebn (Drag and Drop)
//Notizen bearbeiten
//Notizen suchen
//Notiz Datum (erstellt am)
//Papierkorb, wird nach 30 tagen gelöscht

let notes = [];

function renderNotes() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentDiv.innerHTML += getNoteTemplate(indexNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<div class="note">
       <button onclick="deleteNote(${indexNote})">X</button> ${notes[indexNote]}
    </div>`;
}

function addNote() {
   let noteInputRef = document.getElementById('note_input');
   let noteInput = noteInputRef.value

    notes.push(noteInput);
    renderNotes();

    noteInputRef.value = '';
}

function deleteNote(indexNote) {
    notes.splice(indexNote, 1);
    renderNotes();
}