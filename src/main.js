import "./style.css";
import DOM from "./DOM.js";
import newRound from "./newRound.js";

let { note, scale, mode, answer } = newRound();

DOM.tryButton.addEventListener("click", () => {
	const selectedValue = DOM.noteSelect.value;
	if (selectedValue == answer) {
		DOM.tryButton.style = "border-color: green";
		({ note, scale, mode, answer } = newRound());
	} else {
		DOM.tryButton.style = "border-color: red";
		DOM.tryButton.innerText = "Failed!";
		DOM.noteSelectForm.style.display = "none";
		DOM.failSection.style.display = "block";
        DOM.usersAnswer.innerText = selectedValue;
        
        scale.forEach(note => {
            const noteDiv = document.createElement("div");
            noteDiv.style.display = "inline-block";
            noteDiv.innerText = note;
            DOM.failSection.appendChild(noteDiv);
        })
		
	}
});
