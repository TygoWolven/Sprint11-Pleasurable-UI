// Functie voor de 'Initiatieven'
const listVraag = document.getElementById('listVraag'),
      listAanbod = document.getElementById('listAanbod'),
	  vraagButton = document.getElementById('vraagButton'),
	  aanbodButton = document.getElementById('aanbodButton'),
	  aanbodTitle = document.getElementById('titleAanbod'),
	  vraagTitle = document.getElementById('titleVraag')

function showList(val) {
    if(val==1) {
        listVraag.style.display='grid'
        listAanbod.style.display='none'
		vraagTitle.style.display='block'
		aanbodTitle.style.display='none'
    } if(val==2) {
        listVraag.style.display='none'
        listAanbod.style.display='grid'
		vraagTitle.style.display='none'
		aanbodTitle.style.display='block'
    }
}

// Selecteer like formulier
let form = document.querySelector('form.like')

// Luister naar het submit event
// form.addEventListener('submit', function(event) {

// 	let likebutton = document.querySelector('.like-button i')
// 	likebutton.classList.add('.active-like')

// 	// Het this object refereert hier naar het formulier zelf

// 	// Lees de data van het formulier in
// 	// https://developer.mozilla.org/en-US/docs/Web/API/FormData
// 	let data = new FormData(this)

// 	// Voeg een extra eigenschap aan de formulierdata toe
// 	// Deze gaan we server-side gebruiken om iets anders terug te sturen
// 	data.append('enhanced', true)

// 	// Waarschijnlijk wil je op deze plek ook een loading state
// 	// maken, maar daar gaan we volgende week mee aan de slag
// 	form.classList.add('is-loading')

// 	// Gebruik een client-side fetch om een POST te doen naar de server
// 	// Als URL gebruiken we this.action
// 	// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// 	fetch(this.action, {

// 		// Als method gebruiken we this.method (waarschijnlijk POST)
// 		method: this.method,

// 		// Als body geven de data van het formulier mee (inclusief de extra eigenschap)
// 		// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
// 		body: new URLSearchParams(data)

// 	}).then(function(response) {
// 		// Als de server een antwoord geeft, krijgen we een stream terug
// 		// We willen hiervan de text gebruiken, wat in dit geval HTML teruggeeft
// 		return response.text()

// 	}).then(function(responseHTML) {
// 		// En de HTML kunnen we gebruiken om onze DOM aan te passen

// 		//document.querySelector('body').innerHTML = responseHTML
// 		//console.log(responseHTML)
  
// 		// Het is gelukt, neem de waarde uit de span en tel er een bij op
		
// 		if (document.startViewTransition) {
// 			document.startViewTransition(function() {
// 				document.querySelector('.likes').outerHTML = responseHTML
// 			});
// 		} else {
// 			document.querySelector('.likes').outerHTML = responseHTML
// 		}

// 		// En hier kun je bijvoorbeeld nog wat extra's doen om duidelijker te maken
// 		// dat er iets gebeurd is op de pagina
		
// 		// Een eventuele loading state haal je hier ook weer weg
// 		form.classList.remove('is-loading')
// 	});

// 	// Als alles gelukt is, voorkom dan de submit van de browser zelf
// 	// Stel dat je hierboven een tikfout hebt gemaakt, of de browser ondersteunt
// 	// een bepaalde feature hierboven niet (bijvoorbeeld FormData), dan krijg je
// 	// een error en wordt de volgende regel nooit uitgevoerd. De browser valt dan
// 	// automatisch terug naar de standaard POST, wat prima is.
// 	event.preventDefault()
// })






// FORM STEPS
// Dit heb ik toegevoegd voor het PE dat het formulier werkt zonder javascript, als javascript aan staat wordt dus deze class verwijderd
// Markeer dat JavaScript ingeschakeld is
document.addEventListener('DOMContentLoaded', function() {
	let mainElement = document.querySelector('main');

	if (mainElement) {
		console.log('JavaScript is ingeschakeld, noJs class wordt verwijderd.');
		mainElement.classList.remove('noJs');
	} else {
		console.log('Main element niet gevonden.');
	}
});


function showNextFieldset(currentStepId, nextStepId) {
    const currentStep = document.getElementById(currentStepId);
    const nextStep = document.getElementById(nextStepId);
    
    // Controleer valid van de velden binnen de huidige fieldset
    const currentStepFields = currentStep.querySelectorAll(':required');
    let isValid = true;
    currentStepFields.forEach(field => {
        if (!field.checkValidity()) {
            isValid = false;
            field.focus();
        }
    });
    
    // Ga alleen naar de volgende stap als alle velden binnen de huidige fieldset geldig zijn
    if (isValid) {
        currentStep.classList.remove('visible');
        nextStep.classList.add('visible');
    }
}

  function showPreviousFieldset(previousStepId, currentStepId) {
	const previousStep = document.getElementById(previousStepId);
	const currentStep = document.getElementById(currentStepId);
	previousStep.classList.add('visible');
	currentStep.classList.remove('visible');
  }

