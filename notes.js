var notes = [];
var colors = [];

function add_note(note) {
  notes.push(note);
}

function get_note_at_index(x) {
  return (notes[x] != undefined) ? notes[x] : '';
}

function get_notes() {
  return notes;
}

function get_note_count() {
  return notes.length;
}

function replace_note_at_index(x, note) {
  if (notes[x] != undefined) {
    notes[x] = note;
  }
}
