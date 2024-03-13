import React from 'react';
import deleteImg from '../../assets/icons/delete 1.svg';
import editImg from '../../assets/icons/write 1.svg';
import { deleteTodo, editTodo } from '../../app/todoSlice';
import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import './index.css';

const Todo = ({ id, task }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const ref = useRef(null);

  function handleDelete() {
    dispatch(
      deleteTodo({
        id: id,
      }),
    );
  }

  function toggleEditOn() {
    setEditing(!editing);
    ref.current.focus();
  }
  function toggleEditOff() {
    setEditing(!editing);
  }

  function handleEdit() {
    dispatch(
      editTodo({
        id: id,
        newTodo: value,
      }),
    );
    setEditing(false);
  }


  return (
    <div className="list-group">
      {editing ? (
        <>
          <input className="list-group__input" value={value} id={id} onChange={(e) => setValue(e.target.value) }  ref={ref}></input>
          <button className="list-group__button" onClick={handleEdit}>
            Save
          </button>
          <button className="list-group__button" onClick={toggleEditOff}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <input className="list-group__input" value={task} id={id} ref={ref}  readOnly/>
          <img src={editImg} alt="edit" onClick={toggleEditOn}></img>
          <img src={deleteImg} alt="delete" onClick={handleDelete}></img>
        </>
      )}
    </div>
  );
};

export default Todo;
