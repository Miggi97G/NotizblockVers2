let trashNotes = [];

function renderTrashNotes() {
    const trashContentDiv = document.getElementById('trashContent');
    trashContentDiv.innerHTML = '';
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentDiv.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function pushToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    
    renderNotes();
    renderTrashNotes();
}