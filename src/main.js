import "./style.css";
import DOM from "./DOM.js";
import newRound from "./newRound.js";

let { note, scale, mode, answer } = newRound();

DOM.tryButton.addEventListener("click", () => {
	const selectedValue = DOM.noteSelect.value;
	if (selectedValue == answer) {
		DOM.tryButton.style = "border-color: green";

        DOM.successDiv.style.opacity = "1";
        DOM.successDiv.classList.add("success-div-animated");
        setTimeout(() => {
            DOM.successDiv.classList.remove("success-div-animated");
            DOM.successDiv.style.opacity = "0";
        }, 400);
		({ note, scale, mode, answer } = newRound());
	} else if(selectedValue === ""){
        alert("Please choose a note.")
    } else {
		DOM.tryButton.style = "border-color: red";
		DOM.tryButton.disabled = true;
		DOM.tryButton.innerText = "Failed!";
		DOM.noteSelectForm.style.display = "none";
		DOM.failSection.style.display = "flex";
		DOM.failScale.style.display = "flex";
        DOM.usersAnswer.innerText = selectedValue;
        
        scale.forEach(note => {
            const noteDiv = document.createElement("div");
            noteDiv.style.display = "inline-block";
            if(note === answer){
                noteDiv.style.color = "green";
            }
            noteDiv.innerText = note;
            DOM.failScale.appendChild(noteDiv);
        })
		
	}
});

DOM.tryAgainButton.addEventListener("click", () => {
	DOM.noteSelectForm.style.display = "revert";
	DOM.failSection.style.display = "none";
    DOM.tryButton.innerText = "Try";
	DOM.tryButton.style = "border-color: #646cff";
    ({ note, scale, mode, answer } = newRound());
	DOM.failScale.innerText = "";
	DOM.tryButton.disabled = false;
    DOM.usersAnswer.innerText = "";

})
// handle with empty answer (dont let user to click)