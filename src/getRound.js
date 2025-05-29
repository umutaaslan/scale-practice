import { Scale, Mode, Note } from "tonal";
import allNotes from "./allNotes";

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNote() {
	return allNotes[random(0, 11)];
}

function getRandomMode() {
	const randomNum = random(1, 7);
	const randomMode = Mode.names()[randomNum - 1];
	return { number: randomNum, mode: randomMode };
}

function getRound() {
	const note = getRandomNote();
	const scale = Scale.get(note + " major").notes.map((note) => {
		return Note.get(note).alt === 1 ? Note.enharmonic(note) : note;
	});

	const mode = getRandomMode();

	return { note, scale, mode, answer: scale[mode.number - 1] };
}

export default getRound;
