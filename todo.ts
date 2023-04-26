// A class to represent a todo item
class Todo {
    id: number;
    text: string;
    completed: boolean;
  
    constructor(id: number, text: string, completed: boolean) {
      this.id = id;
      this.text = text;
      this.completed = completed;
    }
  }
  
  // A class to represent a todo list
  class TodoList {
    todos: Todo[];
    nextId: number;
  
    constructor() {
      this.todos = [];
      this.nextId = 1;
    }
  
    // A method to add a new todo item
    addTodo(text: string) {
      const todo = new Todo(this.nextId, text, false);
      this.todos.push(todo);
      this.nextId++;
    }
  
    // A method to toggle the completion status of a todo item by id
    toggleTodo(id: number) {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  
    // A method to remove a todo item by id
    removeTodo(id: number) {
      const index = this.todos.findIndex((t) => t.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    }
  
    // A method to display the todo list on the console
    displayTodos() {
      console.log("Todo List:");
      for (const todo of this.todos) {
        console.log(
          `${todo.id}. ${todo.text} ${
            todo.completed ? "(completed)" : "(not completed)"
          }`
        );
      }
    }
  }
  
  // A function to test the todo list functionality
  function testTodoList() {
    // Create a new todo list
    const todoList = new TodoList();
  
    // Add some todos
    todoList.addTodo("Learn typescript");
    todoList.addTodo("Create a todo list app");
    todoList.addTodo("Have fun");
  
    // Display the todos
    todoList.displayTodos();
  
    // Toggle the completion status of the first and third todos
    todoList.toggleTodo(1);
    todoList.toggleTodo(3);
  
    // Display the updated todos
    console.log("\nAfter toggling:");
    todoList.displayTodos();
  
    // Remove the second todo
    todoList.removeTodo(2);
  
    // Display the final todos
    console.log("\nAfter removing:");
    todoList.displayTodos();
  }
  
  // Run the test function
  testTodoList();
  