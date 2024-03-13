import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../features/todo/todoSlice';

function TodoForm({ inputValue, setInputValue }) {
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: inputValue,
    };

    if (!inputValue) return alert('No empty strings please!');
    if (inputValue.length > 30) return alert('Please write a shorter task!');

    dispatch(addTodo(newTodo));
    setInputValue('');
  };

  return (
    <form className="flex mt-24">
      <input
        className="w-[554px] h-[65px] px-5 outline-none"
        placeholder="Create Todo-Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="bg-add-bg hover:opacity-80 text-white w-[122px] h-[65px]"
        type="submit"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
