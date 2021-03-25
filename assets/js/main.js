// Descrizione
// Rifare l'esercizio della todo list come fatto assieme in classe.
// Bonus
// Modificare un elemento della lista, ricordandosi di aggiornare il title di quello giusto

var app = new Vue(
  {
    el: '#root',
    data: {
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
      ]

    },
    methods: {

    }
  }
);
