import { useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import { addTodo } from "../features/todos/todosSlice";

export const EntryForm = () => {
  const initialState = {
    content: "",
  };
  const [todo, setTodo] = useState(initialState);
  const dispatch = useDispatch();
  const form = useRef(null);

  const handleOnChange = (e) => {
    setTodo({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.content) {
      dispatch(addTodo(todo));
      form.current.reset();
      setTodo(initialState);
    }
  };

  return (
    <form ref={form} className="form" onSubmit={handleSubmit}>
      <input
        maxLength="70"
        className="form__input"
        placeholder="Create Todo-Task"
        type="text"
        name="content"
        onChange={handleOnChange}
      ></input>
      <button
        className={
          todo.content ? "form__button" : " form__button form__button--disabled"
        }
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
