import allNotes from "./allNotes";

function DOMFunc() {
	const noteName = document.querySelector(".note");
	const modeIndex = document.querySelector(".mode-index");
	const mode = document.querySelector(".mode");
	const noteSelect = document.querySelector("#note-select");
	const tryButton = document.querySelector("#try-button");
    const noteSelectForm = document.querySelector("#note-select-form");
    const failSection = document.querySelector("#fail-section");
    const failScale = document.querySelector(".fail-scale");
    const usersAnswer = document.querySelector("#users-answer");

    failSection.style.display = "none";

    allNotes.forEach(note => {
        const newOption = document.createElement("option");
        newOption.setAttribute("value", note);
        newOption.innerText = note;
        noteSelect.appendChild(newOption);
    })

	return { noteName, modeIndex, mode, noteSelect, tryButton, noteSelectForm, failSection, failScale, usersAnswer};
}

const DOM = DOMFunc();

export default DOM;
