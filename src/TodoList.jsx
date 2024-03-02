import { TodoItem } from "./TodoItem";

export function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && <p>No Todos to display</p>}
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          key={todo.id}
        />
      ))}
    </ul>
  );
}
