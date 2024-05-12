//Importo la funzione "createApp" dalla classe/oggettone "Vue"
const { createApp } = Vue
// vuol dire ===> const createApp = Vue.createApp;

//Creo un oggetto con la configurazione (i dati) della mia app
const configurazione = {
	//l'oggetto ha una proprietà "data", che è una funzione
	data() {
		//La funzione restituisce un oggetto con tutti i nostri dati
		return {
			firstMessage: 'Hello VueJs World!'	
		}
	}
};

let app = Vue.createApp(configurazione);

console.log("applicazione inizializzata ma non montata", app);

app.mount('#app');