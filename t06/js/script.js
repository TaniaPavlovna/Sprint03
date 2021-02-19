function transformation() { //Функция переключается между двумя состояниями веб-страницы, при нажатии на кнопку
	if (document.getElementById("hero").innerHTML == "Bruce Banner"){
	  document.getElementById("lab").style.background = "#70964b";
	  document.getElementById("hero").innerHTML = "Hulk";
	  document.getElementById("hero").style.fontSize = "130px";
	  document.getElementById("hero").style.letterSpacing = "6px";
	} else if (document.getElementById("hero").innerHTML == "Hulk"){
	  document.getElementById("lab").style.background = "#ffb300";
	  document.getElementById("hero").innerHTML = "Bruce Banner";
	  document.getElementById("hero").style.fontSize = "60px";
	  document.getElementById("hero").style.letterSpacing = "2px";
	}
}
