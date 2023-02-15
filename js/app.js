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
                }, 
                {
                  image: 'img/avatar_2.jpg',
                  name: 'Fabio',
                }, 
                {
                  image: 'img/avatar_3.jpg',
                  name: 'Samuele',
                }, 
                {
                  image: 'img/avatar_4.jpg',
                  name: 'Alessandro B.',
                },         
                {
                  image: 'img/avatar_5.jpg',
                  name: 'Alessandro L.',
                },     
                {
                  image: 'img/avatar_6.jpg',
                  name: 'Claudia',
                },     
                {
                  image: 'img/avatar_7.jpg',
                  name: 'Federico',
                },     
                {
                  image: 'img/avatar_8.jpg',
                  name: 'Davide',
                },             
             ]
        }
    },

    methods: {


    },

    created() {


      },
    
}).mount("#app")