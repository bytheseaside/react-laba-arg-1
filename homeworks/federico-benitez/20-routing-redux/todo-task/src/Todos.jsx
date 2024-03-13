import { useSelector } from 'react-redux';
import { NewTodo, TodoItem } from './components/item';

export default function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <main className="container">
      <NewTodo />
      {todos.length > 0 && (
        <ul className="list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem data={todo} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
