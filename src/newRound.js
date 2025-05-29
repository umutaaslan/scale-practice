import DOM from "./DOM";
import getRound from "./getRound";

function numberToRoman(number) {
	switch (Number(number)) {
		case 1:
			return "I";
		case 2:
			return "II";
		case 3:
			return "III";
		case 4:
			return "IV";
		case 5:
			return "V";
		case 6:
			return "VI";
		case 7:
			return "VII";
	}
}

export default function newRound() {
	const { note, scale, mode, answer } = getRound();
	DOM.noteName.innerText = note;
	DOM.mode.innerText = mode.mode;
	DOM.modeIndex.innerText = numberToRoman(mode.number);
	console.log(answer)
	return { note, scale, mode, answer };
}
