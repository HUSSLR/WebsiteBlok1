var deButton = document.querySelector("h2");

function doeFormNeerEnOp(){
	let hetFormulier = document.querySelector("form");
	hetFormulier.classList.toggle("toonForm");
}

deButton.addEventListener("click", doeFormNeerEnOp);