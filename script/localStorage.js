const STORAGE_KEY_ACTIVE = 'my_notes_active';
const STORAGE_KEY_FAVORITE = 'my_notes_favorite';
const STORAGE_KEY_TRASH = 'my_notes_trash';

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(activeNotes));
    localStorage.setItem(STORAGE_KEY_TRASH, JSON.stringify(trashNotes));
}

function loadFromLocalStorage() {
    const savedActive = localStorage.getItem(STORAGE_KEY_ACTIVE);
    const savedTrash = localStorage.getItem(STORAGE_KEY_TRASH);

    activeNotes = savedActive ? JSON.parse(savedActive) : [];
    trashNotes = savedTrash ? JSON.parse(savedTrash) : [];

    render(); // Anzeige aktualisieren
}

// Wichtig: Beim Laden der Seite aufrufen
loadFromLocalStorage();