const STORAGE_KEY_ACTIVE = 'my_notes_active';
const STORAGE_KEY_FAVORITE = 'my_notes_favorite';
const STORAGE_KEY_TRASH = 'my_notes_trash';




function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadFromLocalStorage() {
    const savedNotes = localStorage.getItem("notes");
    notes = savedNotes ? JSON.parse(savedNotes) : [];
    render(); // Anzeige aktualisieren
}

// Wichtig: Beim Laden der Seite aufrufen
loadFromLocalStorage();