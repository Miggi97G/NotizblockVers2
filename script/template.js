function getNoteTemplate(indexNote) {
    return `<div class="note">
       <button onclick="pushToTrash(${indexNote})">X</button> ${notes[indexNote]}
    </div>`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<div class="trash_note">
       <button onclick="deleteNote(${indexTrashNote})">X</button><p>${trashNotes[indexTrashNote]}</p>
    </div>`;
}