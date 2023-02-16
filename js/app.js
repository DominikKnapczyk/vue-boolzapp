const { createApp } = Vue;

createApp({
    data() {
        return {

            // Indice del contatto selezionato  
            currentIndex: 0,

            // valore dell'input di ricerca

            searchTerm: '', 

            newMessage: '',

            selectedMessage: '',
            
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
                      eliminated: false,
                      
                     },
                     {
                      message: 'Ricordati di stendere i panni',
                      status: 'send',
                      time: "23:10",
                      eliminated: false,
                      
                     },
                     {
                       message: 'Tutto fatto!',
                       status: 'recive',
                       time: "23:13",
                       eliminated: false,
                       
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
                     eliminated: false,
                     
                    },
                    {
                     message: 'Stavo dormendo',
                     status: 'send',
                     time: "07:10",
                     eliminated: false,
                     
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
                     eliminated: false,
                     
                    },
                    {
                     message: 'Male, ho la febbre',
                     status: 'send',
                     time: "14:30",
                     eliminated: false,
                     
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
                     eliminated: false,
                    },
                    {
                     message: 'No, non ho voglia',
                     status: 'send',
                     time: "17:10",
                     eliminated: false,
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
                     eliminated: false,
                     
                    },
                    {
                     message: 'Va bene, vengo alle 13, ok?',
                     status: 'recive',
                     time: "12:55",
                     eliminated: false,
                     
                    },
                    {
                      message: 'PERFETTO!',
                      status: 'send',
                      time: "14:10",
                      eliminated: false,
                      
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
                     eliminated: false,
                     
                    },
                    {
                     message: 'SONO FIDANZATO!',
                     status: 'send',
                     time: "17:50",
                     eliminated: false,
                     
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
                     eliminated: false,
                     
                    },
                    {
                     message: 'Grazie.',
                     status: 'recive',
                     time: "12:50",
                     eliminated: false,
                     
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
                     eliminated: false,
                     
                    },
                 ],
                },             
             ]
        }
    },


methods: {
  addMessage() {
    // Controlla se il testo del nuovo messaggio non è vuoto
    if (this.newMessage !== '') {
      // Crea un oggetto che rappresenta il nuovo messaggio
      const message = {
        message: this.newMessage,
        status: 'send', 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Formatta l'ora corrente come una stringa leggibile
        eliminated: false,
      };
      // Aggiungi l'oggetto del messaggio all'array di messaggi della chat corrente
      this.contacts[this.currentIndex].text.push(message);
      // Ripulisci il campo del nuovo messaggio per permettere all'utente di inserirne uno nuovo
      this.newMessage = '';
      this.replyMessage();
    }
  },

  replyMessage() {
    setTimeout(() => {
      const message = {
        message: "Ok",
        status: 'recive', 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        eliminated: false,
      };
      this.contacts[this.currentIndex].text.push(message);
    }, 1000);
  },

  showDropdown(currentIndex) {
    this.selectedMessage = currentIndex;
    // mostra il menu a tendina
  },

  deleteMessage(contactIndex, messageIndex) {
    const eliminatedMessage = {
      message: "Questo messaggio è stato eliminato",
      status: 'send', 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      eliminated: true,
    };
    this.contacts[contactIndex].text.splice(messageIndex, 1, eliminatedMessage)
    this.selectedMessage = '';
  },
},

computed: {

  filteredContacts() {
    return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  
}

}).mount('#app');
    
