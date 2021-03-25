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
    computed: {
      // creo funzione per riordinare le todo e metter in fondo quelle completate
      computedTodos: function(){
        console.log(this.todos);
        let doneTodo = this.todos.filter((todo) => todo.status == 'done');
        let todoTodo = this.todos.filter((todo) => todo.status == 'todo');
        return [...todoTodo, ...doneTodo];
      }
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
