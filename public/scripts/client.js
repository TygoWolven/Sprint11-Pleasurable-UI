// Selecteer like formulier
let form = document.querySelector('form.like')

// Luister naar het submit event
form.addEventListener('submit', function(event) {

	// Het this object refereert hier naar het formulier zelf

	// Lees de data van het formulier in
	// https://developer.mozilla.org/en-US/docs/Web/API/FormData
	let data = new FormData(this)

	// Voeg een extra eigenschap aan de formulierdata toe
	// Deze gaan we server-side gebruiken om iets anders terug te sturen
	data.append('enhanced', true)

	// Waarschijnlijk wil je op deze plek ook een loading state
	// maken, maar daar gaan we volgende week mee aan de slag
	form.classList.add('is-loading')

	// Gebruik een client-side fetch om een POST te doen naar de server
	// Als URL gebruiken we this.action
	// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
	fetch(this.action, {

		// Als method gebruiken we this.method (waarschijnlijk POST)
		method: this.method,

		// Als body geven de data van het formulier mee (inclusief de extra eigenschap)
		// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
		body: new URLSearchParams(data)

	}).then(function(response) {
		// Als de server een antwoord geeft, krijgen we een stream terug
		// We willen hiervan de text gebruiken, wat in dit geval HTML teruggeeft
		return response.text()

	}).then(function(responseHTML) {
		// En de HTML kunnen we gebruiken om onze DOM aan te passen

		//document.querySelector('body').innerHTML = responseHTML
		//console.log(responseHTML)
  
		// Het is gelukt, neem de waarde uit de span en tel er een bij op
		
		if (document.startViewTransition) {
			document.startViewTransition(function() {
				document.querySelector('.likes').outerHTML = responseHTML
			});
		} else {
			document.querySelector('.likes').outerHTML = responseHTML
		}

		// En hier kun je bijvoorbeeld nog wat extra's doen om duidelijker te maken
		// dat er iets gebeurd is op de pagina
		
		

		// Een eventuele loading state haal je hier ook weer weg
		form.classList.remove('is-loading')
	});

	// Als alles gelukt is, voorkom dan de submit van de browser zelf
	// Stel dat je hierboven een tikfout hebt gemaakt, of de browser ondersteunt
	// een bepaalde feature hierboven niet (bijvoorbeeld FormData), dan krijg je
	// een error en wordt de volgende regel nooit uitgevoerd. De browser valt dan
	// automatisch terug naar de standaard POST, wat prima is.
	event.preventDefault()
})





var vraagButton = document.querySelector('#vraagButton')
var vraagContent = document.querySelector('.vraagAanbod')


vraagButton.addEventListener('click', showVraagContent)

function showVraagContent() {
	console.log("klikt op de vraag button");

	vraagContent.classList.toggle('active');

	this.classList.toggle('active');
}



var aanbodButton = document.querySelector('#aanbodButton')
var aanbodContent = document.querySelector('.aanbodContent')

aanbodButton.addEventListener('click', showAanbodContent)

function showAanbodContent() {
	console.log("klikt op de aanbod button");
	
	aanbodContent.classList.toggle('active');

	this.classList.toggle('active');
}



var likeButton = document.querySelector('.like button')
var heartIcon = document.querySelector('.heartIcon')

likeButton.addEventListener('click', liked);

function liked() {
	console.log("liked");

	this.classList.add('liked');
}