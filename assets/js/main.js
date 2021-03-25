// Descrizione
// Rifare l'esercizio della todo list come fatto assieme in classe.
// Bonus
// Modificare un elemento della lista, ricordandosi di aggiornare il title di quello giusto

var app = new Vue(
  {
    el: '#root',
    data: {
      // array di todos
      todos: [
        {
          title: 'Allenamento',
          status: `done`,
        },
        {
          title: 'Spesa',
          status: `todo`,
        },
        {
          title: 'Studio',
          status: `todo`,
        },
        {
          title: 'Passeggiare con cane',
          status: `todo`,
        },
        {
          title: 'Pulire casa',
          status: `todo`,
        },
      ],
      // stringa vuota dell'input
      textInput: '',
    },
    methods: {
      // creo funzione per creare e aggiungere ToDo all'array todos
      add: function(){
        let obj = {
          title: this.textInput
        }
        this.todos.push(obj);
        this.textInput = '';
      },

    }
  }
);
