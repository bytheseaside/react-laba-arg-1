import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../app/todoSlice';
import './index.css';

function CreateTodo() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  function submitTodo() {
    if (value !== '') {
      dispatch(
        addTodo({
          title: value,
        }),
      );
      setValue('');
    } else {
      alert('this field is require with some data!');
    }
  }

  return (
    <div className="container-add-input">
      <input
        type="text"
        placeholder="Create Todo-Task"
        className="container-add-input__input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="container-add-input__button" onClick={submitTodo}>
        Add
      </button>
    </div>
  );
}

export default CreateTodo;
