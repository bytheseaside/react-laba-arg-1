import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from './components/Container';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [inputValue, setInputValue] = useState('');

  const todos = useSelector((state) => state.todos);

  return (
    <Container>
      <TodoForm inputValue={inputValue} setInputValue={setInputValue} />
      <div className="flex flex-col gap-10 mt-20">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} inputValue={inputValue} />
        ))}
      </div>
    </Container>
  );
}

export default App;
