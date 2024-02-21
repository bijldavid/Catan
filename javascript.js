console.log("Catanjapan");

const TOTAL_SETTLES = 54;
const TOTAL_ROADS = 72;

// ----------------------------------------------------------------------

// Een mapping om aan te geven welke roads grenzen aan welke settlements
const SETTLE_ROAD_MAPPING = {
	"settle-1": ["road-1", "road-2"],
	"settle-2": ["road-3", "road-4"],
	"settle-3": ["road-5", "road-6"],

	"settle-4": ["road-1", "road-7"],
	"settle-5": ["road-2", "road-3", "road-8"],
	"settle-6": ["road-4", "road-5", "road-9"],
	"settle-7": ["road-6", "road-10"],

	"settle-8": ["road-7", "road-11", "road-12"],
	"settle-9": ["road-8", "road-13", "road-14"],
	"settle-10": ["road-9", "road-15", "road-16"],
	"settle-11": ["road-10", "road-17", "road-18"],

	"settle-12": ["road-11", "road-19"],
	"settle-13": ["road-12", "road-13", "road-20"],
	"settle-14": ["road-14", "road-15", "road-21"],
	"settle-15": ["road-16", "road-17", "road-22"],
	"settle-16": ["road-18", "road-23"],

	"settle-17": ["road-19", "road-24", "road-25"],
	"settle-18": ["road-20", "road-26", "road-27"],
	"settle-19": ["road-21", "road-28", "road-29"],
	"settle-20": ["road-22", "road-30", "road-31"],
	"settle-21": ["road-23", "road-32", "road-33"],

	"settle-22": ["road-24", "road-34"],
	"settle-23": ["road-25", "road-26", "road-35"],
	"settle-24": ["road-27", "road-28", "road-36"],
	"settle-25": ["road-29", "road-30", "road-37"],
	"settle-26": ["road-31", "road-32", "road-38"],
	"settle-27": ["road-33", "road-39"],

	"settle-28": ["road-34", "road-40"],
	"settle-29": ["road-35", "road-41", "road-42"],
	"settle-30": ["road-36", "road-43", "road-44"],
	"settle-31": ["road-37", "road-45", "road-46"],
	"settle-32": ["road-38", "road-47", "road-48"],
	"settle-33": ["road-39", "road-49"],

	"settle-34": ["road-40", "road-41", "road-50"],
	"settle-35": ["road-42", "road-43", "road-51"],
	"settle-36": ["road-44", "road-45", "road-52"],
	"settle-37": ["road-46", "road-47", "road-53"],
	"settle-38": ["road-48", "road-49", "road-54"],

	"settle-39": ["road-50", "road-55"],
	"settle-40": ["road-51", "road-56", "road-57"],
	"settle-41": ["road-52", "road-58", "road-59"],
	"settle-42": ["road-53", "road-60", "road-61"],
	"settle-43": ["road-54", "road-62"],

	"settle-44": ["road-55", "road-56", "road-63"],
	"settle-45": ["road-57", "road-58", "road-64"],
	"settle-46": ["road-59", "road-60", "road-65"],
	"settle-47": ["road-61", "road-62", "road-66"],

	"settle-48": ["road-63", "road-67"],
	"settle-49": ["road-64", "road-68", "road-69"],
	"settle-50": ["road-65", "road-70", "road-71"],
	"settle-51": ["road-66", "road-72"],

	"settle-52": ["road-67", "road-68"],
	"settle-53": ["road-69", "road-70"],
	"settle-54": ["road-71", "road-72"]
}

// ----------------------------------------------------------------------

// Loop creëert array als het ware
function removeSettleAnimations() {
	for (let i = 1; i <= TOTAL_SETTLES; i++) {
		let id = "settle-" + i
		let settle = document.getElementById(id)

		// Zodra er op een settlement wordt geklikt wordt de animatie verwijderd, ontvangt de geklikde settlement de "solid" style en worden alle settlement onzichtbaar gemaakt
		settle.classList.remove("animatie");
		if (!settle.classList.contains("solid"))
			settle.classList.add("invisible");
	}
}

function removeRoadAnimations() {
	for (let i = 1; i <= TOTAL_ROADS; i++) {
		let id = "road-" + i
		let road = document.getElementById(id)

		road.classList.remove("animatie");
		if (!road.classList.contains("solid"))
			road.classList.add("invisible");
	}
}

function giveSettleAnimations() {
	for (let i = 1; i <= TOTAL_SETTLES; i++) {
		let id = "settle-" + i
		let settle = document.getElementById(id)


		settle.classList.remove("invisible");
		if (!settle.classList.contains("solid"))
			settle.classList.add("animatie");
	}
}

// Specifieke functie om alleen de juiste aangrenzende roads een animatie te geven
function giveRoadAnimations(settle) {
	let roads = SETTLE_ROAD_MAPPING[settle]
	for (let id of roads) {
		let road = document.getElementById(id)

		road.classList.remove("invisible")
		if (!road.classList.contains("solid"))
			road.classList.add("animatie");
	}
}

// Hier start de game mee
removeRoadAnimations();
giveSettleAnimations();

// Hier wordt het clickevent op de settlements toegevoegd
for (let i = 1; i <= TOTAL_SETTLES; i++) {
	let id = "settle-" + i
	let settle = document.getElementById(id)

	settle.addEventListener('click', () => {
		console.log(`Settle ${i} clicked`);

		let invis = settle.classList.contains("invisible")
		let solid = settle.classList.contains("solid")

		// Alle settlements met de stlye "invisible" & "solid" worden hier niet klikbaar gemaakt, als je er op klikt vermeld de console dat je er niet op mag klikken
		if (invis || solid)
			console.log("You are not allowed to click this settlement")
		// Als de settlement niet "invisible" of "solid" is, betekent dit dat je erop kunt klikken. Zodra je erop klikt, verwijdert de code de settle animaties en voegt hij road animaties toe.
		else {
			settle.classList.add("solid");
			removeSettleAnimations();
			// De giveRoadAnimations heeft een (id) parameter, hij zal daardoor terug refereren naar de SETTLE_ROAD_MAPPING
			giveRoadAnimations(id);
		}
	});
}

for (let i = 1; i <= TOTAL_ROADS; i++) {
	let id = "road-" + i
	let road = document.getElementById(id)

	road.addEventListener('click', () => {
		console.log(`Road ${i} clicked`);
		let invis = road.classList.contains("invisible")
		let solid = road.classList.contains("solid")

		if (invis || solid)
			console.log("You are not allowed to click this road")
		else {
			road.classList.add("solid");
			removeRoadAnimations();
			giveSettleAnimations();
		}
	});
}

// ----------------------------------------------------------------------

// Array voor alle hexagons
var board = [
	"hexagon-1", "hexagon-2", "hexagon-3",
	"hexagon-4", "hexagon-5", "hexagon-6", "hexagon-7",
	"hexagon-8", "hexagon-9", "hexagon-10", "hexagon-11", "hexagon-12",
	"hexagon-13", "hexagon-14", "hexagon-15", "hexagon-16",
	"hexagon-17", "hexagon-18", "hexagon-19"
];

// Array voor alle tiles
var styles = [
	"hexagon-lumber", "hexagon-lumber", "hexagon-lumber", "hexagon-lumber",
	"hexagon-sheep", "hexagon-sheep", "hexagon-sheep", "hexagon-sheep",
	"hexagon-wheat", "hexagon-wheat", "hexagon-wheat", "hexagon-wheat",
	"hexagon-brick", "hexagon-brick", "hexagon-brick",
	"hexagon-ore", "hexagon-ore", "hexagon-ore",
	"hexagon-desert"
];

// Functie om het bord te shuffelen
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));

		// I met J verwisselen
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}
// Shuffeled alle styles zodat elke hexagon een random waarde uit de styles array krijgt
function createBoard() {
	shuffleArray(styles);

	// Loopt door alle hexagons heen
	for (var i = 0; i < board.length; i++) {
		var hexagonID = board[i];
		var style = styles[i];

		// Haal de hexagon met ID board[i] op
		var hexagon = document.getElementById(hexagonID);
		// Geef die hexagon de style styles[i]
		hexagon.classList.add(style);
	}
}

// Loopt door alle hexagons heen en heelt steeds de style weg
function refresh() {
	for (var i = 0; i < board.length; i++) {
		var hexagon = document.getElementById(board[i]);
		hexagon.classList.remove(styles[i]);
	}
	// Creeert opnieuw het bord aan en is automatisch gerandomized
	createBoard();

	// Na het refreshen van het bord moeten alle settlements worden verwijderd
	for (let i = 1; i <= TOTAL_SETTLES; i++) {
		let id = "settle-" + i
		let settle = document.getElementById(id)

		settle.classList.remove("solid");
		settle.classList.remove("invisible");
		settle.classList.add("animatie");
	}

	// Na het refreshen van het bord moeten alle roads worden verwijderd
	for (let i = 1; i <= TOTAL_ROADS; i++) {
		let id = "road-" + i
		let road = document.getElementById(id)

		road.classList.remove("solid");
		road.classList.remove("animatie");
		road.classList.add("invisible");
	}
}

function setup() {
	createBoard();

	// De button wordt klikbaar gemaakt en gekoppeld aan de refresh functie
	var refreshButton = document.getElementById("refresh");
	refreshButton.addEventListener("click", refresh);
}

// ----------------------------------------------------------------------


// Het id van de hover wordt wordt aangeroepen
var buttonDev = document.getElementById("dev-hover");
// Het id van de button wordt wordt aangeroepen
var hoverDev = document.getElementById("button-devcard");

hoverDev.addEventListener("mouseenter", () => {
	buttonDev.classList.remove("invisible");
})

hoverDev.addEventListener("mouseleave", () => {
	buttonDev.classList.add("invisible");
})

// road
var buttonRoad = document.getElementById("road-hover");
var hoverRoad = document.getElementById("button-road");

hoverRoad.addEventListener("mouseenter", () => {
	buttonRoad.classList.remove("invisible");
})

hoverRoad.addEventListener("mouseleave", () => {
	buttonRoad.classList.add("invisible");
})

// settle
var buttonSettle = document.getElementById("settle-hover");
var hoverSettle = document.getElementById("button-settle");

hoverSettle.addEventListener("mouseenter", () => {
	buttonSettle.classList.remove("invisible");
})

hoverSettle.addEventListener("mouseleave", () => {
	buttonSettle.classList.add("invisible");
})

// city
var buttonCity = document.getElementById("city-hover");
var hoverCity = document.getElementById("button-city");

hoverCity.addEventListener("mouseenter", () => {
	buttonCity.classList.remove("invisible");
})

hoverCity.addEventListener("mouseleave", () => {
	buttonCity.classList.add("invisible");
})

// trade
var buttonTrade = document.getElementById("trade-hover");
var hoverTrade = document.getElementById("button-trade");

hoverTrade.addEventListener("mouseenter", () => {
	buttonTrade.classList.remove("invisible");
})

hoverTrade.addEventListener("mouseleave", () => {
	buttonTrade.classList.add("invisible");
})
