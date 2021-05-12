let nadpis=document.getElementById("reseniNadpis")
let text=document.getElementById("odpoved")
let kviz=document.getElementById("kvizodkaz")
text.addEventListener("click",function() {
	nadpis.textContent = "Řešení"
	text.textContent = "Text V míse je maso není v uvozovkách a ani není v apostrfech."
	text.classList.toggle("modra")
})
kviz.addEventListener("click",function() {
	let spravne=0;
	let odpoved=prompt("Je následující kód správně?\nprint(1, a, 2)\na) ano\nb) ne\nZadej písmeno správné odpovědi:");
	if (odpoved === "b") {
		alert("Správně! :-)");
		spravne++
	} else {
		alert("Špatně! :-(");
	}


	odpoved=prompt('Co vypíše následující program?\nprint(1, ".", "A")\n"2.B"\na) 1.A\nb) 1.A\n2.b\nc) 1 . A\nZadej písmeno správné odpovědi:');
	if (odpoved === "c") {
		alert("Správně! :-)");
		spravne++
	} else {
		alert("Špatně, mezi výrazy odděleními čárkou se vypíše mezera, a 2.B se nevypíše protože není v print(). :-(");
	}

	alert("Máš správně " + spravne + " otázek a špatně " + (2 - spravne) + " otázek.")
})
