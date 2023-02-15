const { createApp } = Vue;

createApp({
    data() {
        return {

            // Indice del contatto selezionato  
            currentIndex: 0,

            // Dati dei contatti
            contacts: [
                {
                  image: 'img/avatar_1.jpg',
                  name: 'Michele',
                  text: [
                     {
                      message: 'Hai portato a spasso il cane?',
                      status: 'send',
                      time: "22:50",
                     },
                     {
                      message: 'Ricordati di stendere i panni',
                      status: 'send',
                      time: "23:10",
                     },
                     {
                       message: 'Tutto fatto!',
                       status: 'recive',
                       time: "23:13",
                     },
                  ],
                }, 
                {
                  image: 'img/avatar_2.jpg',
                  name: 'Fabio',
                  text: [
                    {
                     message: 'Aiutooooo',
                     status: 'recive',
                     time: "02:50",
                    },
                    {
                     message: 'Stavo dormendo',
                     status: 'send',
                     time: "07:10",
                    },
                 ],
                }, 
                {
                  image: 'img/avatar_3.jpg',
                  name: 'Samuele',
                  text: [
                    {
                     message: 'Come stai?',
                     status: 'recive',
                     time: "13:54",
                    },
                    {
                     message: 'Male, ho la febbre',
                     status: 'send',
                     time: "14:30",
                    },
                 ],
                }, 
                {
                  image: 'img/avatar_4.jpg',
                  name: 'Alessandro B.',
                  text: [
                    {
                     message: 'Domani andiamo in discoteca?',
                     status: 'recive',
                     time: "16:50",
                    },
                    {
                     message: 'No, non ho voglia',
                     status: 'send',
                     time: "17:10",
                    },
                 ],
                },         
                {
                  image: 'img/avatar_5.jpg',
                  name: 'Alessandro L.',
                  text: [
                    {
                     message: 'Domenica fai qualcosa? Ti va di venira a pranzo da me?',
                     status: 'send',
                     time: "12:50",
                    },
                    {
                     message: 'Va bene, vengo alle 13, ok?',
                     status: 'recive',
                     time: "12:55",
                    },
                    {
                      message: 'PERFETTO!',
                      status: 'send',
                      time: "14:10",
                     },
                 ],
                },     
                {
                  image: 'img/avatar_6.jpg',
                  name: 'Claudia',
                  text: [
                    {
                     message: 'Eii come va?',
                     status: 'recive',
                     time: "16:33",
                    },
                    {
                     message: 'SONO FIDANZATO!',
                     status: 'send',
                     time: "17:50",
                    },
                 ],
                },     
                {
                  image: 'img/avatar_7.jpg',
                  name: 'Federico',
                  text: [
                    {
                     message: 'Auguri!!!!',
                     status: 'send',
                     time: "12:50",
                    },
                    {
                     message: 'Grazie.',
                     status: 'recive',
                     time: "12:50",
                    }
                 ],
                },     
                {
                  image: 'img/avatar_8.jpg',
                  name: 'Davide',
                  text: [
                    {
                     message: 'YO, COME BUTTA BRO??',
                     status: 'recive',
                     time: "04:50",
                    },
                 ],
                },             
             ]
        }
    },

methods: {
  addMessage() {
    // Controlla se il testo del nuovo messaggio non è vuoto
    if (this.newMessage.trim() !== '') {
      // Crea un oggetto che rappresenta il nuovo messaggio
      const message = {
        message: this.newMessage.trim(), // Testo del messaggio, pulito dai caratteri bianchi iniziali e finali
        status: 'send', // Stato del messaggio: "send", probabilmente indica che il messaggio è stato inviato
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // Formatta l'ora corrente come una stringa leggibile, ad es. "10:30"
      };
      // Aggiungi l'oggetto del messaggio all'array di messaggi della chat corrente
      this.contacts[this.currentIndex].text.push(message);
      // Ripulisci il campo del nuovo messaggio per permettere all'utente di inserirne uno nuovo
      this.newMessage = '';
    }
  }
}}).mount('#app');
    
