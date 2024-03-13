import delete_icon from "../assets/delete.svg";
import edit_icon from "../assets/edit.svg";
import { deleteTodo, openEdit } from "../features/todos/todosSlice";
import { useDispatch } from "react-redux";
import React, { memo } from "react";

export const Task = memo(({ todo }) => {
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    dispatch(openEdit({ id: todo.id, content: todo.content }));
  };

  const handleDelete = (e) => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <div className="task">
      <div className="task__text">{todo.content}</div>
      <div className="task__buttons">
        <img src={edit_icon} onClick={handleEdit} alt="edit" />
        <img src={delete_icon} onClick={handleDelete} alt="delete" />
      </div>
    </div>
  );
});
