# React Todo App

This app illustrates the basic react concepts such as the use of components, hooks, and best practices in React.
React is built around concepts of components, which are reusable and independent pieces of UI. In this app, we have several components:
- **main**: The root component
- **App**: The main component that holds the entire application
- **NewTodoForm**: The component responsible for adding a new Todo
- **TodoItem**: Component responsible for creating a single todo
- **TodoList**: Component responsible for displaying all the todos added

### State management
React allows to manage component state, which determines how components render and behave over time. In this App, we use state to
- Keep track of the list of todos added
- Manage the input value for adding new todos

### Props
Props are used to pass data from parent to child components: In our app:
- NewTodoForm: receives the addTodo function which is responsible for adding a new todo
- TodoItem: receives the todo object properties, the toggleTodo (responsible for toggling the checkbox to mark a todo as either completed or not completed), and the deleteTodo(responsible for removing a todo from the list of displayed todo) functions 
- TodoList: receives the properties from the parent App component which are passed down to the child component TodoItem.

### Handling user input
React allows us to handle user interactions easily. In this app, we use event handlers to:
- Add new todos when the user submits the form
- Toggle the completion status of todos when they are clicked

#### Getting started
To run this app locally:
1. Clone this repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server
5. Open the url provided in your browser to view the app
