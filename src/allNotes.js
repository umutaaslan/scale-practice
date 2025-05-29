import { Note } from "tonal";

const naturalNotes =  Note.names()
const allNotes = Note.sortedNames([...naturalNotes, "Bb", "Db", "Eb", "Gb", "Ab"]);

export default allNotes;