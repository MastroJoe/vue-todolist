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
        },
        {
          title: 'Spesa',
        },
        {
          title: 'Studio',
        },
        {
          title: 'Passeggiare con cane',
        },
        {
          title: 'Pulire casa',
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
