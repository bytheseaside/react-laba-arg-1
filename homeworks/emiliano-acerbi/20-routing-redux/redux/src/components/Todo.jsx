import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, removeTodo } from '../features/todo/todoSlice';
import Modal from './Modal';

function Todo({ todo }) {
  const [editModal, setEditModal] = useState(false);
  const [newInputValue, setNewInputValue] = useState('');
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditModal = () => {
    setEditModal(true);
  };

  const handleEditTodo = (e, id) => {
    e.preventDefault();
    if (!newInputValue) return alert('No empty strings please!');
    if (newInputValue.length > 30) return alert('Please write a shorter task!');

    dispatch(editTodo({ id, newText: newInputValue }));
    setNewInputValue('');
    setEditModal(false);
  };

  const handleCancelEdit = (e) => {
    e.preventDefault();
    setNewInputValue('');
    setEditModal(false);
  };

  return (
    <article className="flex text-xl">
      <Modal
        todo={todo}
        setNewInputValue={setNewInputValue}
        newInputValue={newInputValue}
        editModal={editModal}
        handleCancelEdit={handleCancelEdit}
        handleEditTodo={handleEditTodo}
      />

      <h2 className="bg-white w-[554px] h-[65px] flex items-center px-3">{todo.text}</h2>
      <div className="flex">
        <button onClick={() => handleEditModal()}>
          <img src="/edit.svg" alt="edit button" />
        </button>
        <button onClick={() => handleRemoveTodo(todo.id)}>
          <img src="/delete.svg" alt="delete button" />
        </button>
      </div>
    </article>
  );
}

export default Todo;
