let spravne
let odpoved=prompt("Co dělá příkaz cd adresar?\na) Vytvoří adresář adresar\nb) Jde do adreáře adresar\nc) Vypíše soubory v adresáři adresar\nZadej písmeno správné odpovědi:");
if (odpoved === "b") {
	alert("Správně! :-)");
	spravne = 1
} else {
	alert("Špatně! :-(");
	spravne = 0
}



odpoved=prompt("Co dělá operátor **?\na) násobí\nb) dělí\nc) umocňuje\nZadej písmeno správné odpovědi:");
if (odpoved === "c") {
	alert("Správně! :-)");
	spravne++
} else {
	alert("Špatně! :-(");
}


odpoved=prompt("Co dělá příkaz dir?\na) vypíše soubory které obsahuje akt. adresář\nb) jde do nadřazeného adresáře\nc) vypíše cestu k aktuálnímu adresáři\nZadej písmeno správné odpovědi:");
if (odpoved === "a") {
	alert("Správně! :-)");
	spravne++
} else {
	alert("Špatně! :-(");
}
alert("Máš správně " + spravne + " otázek a špatně " + (3 - spravne) + " otázek.")