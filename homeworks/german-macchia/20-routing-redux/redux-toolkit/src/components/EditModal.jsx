import { useDispatch } from "react-redux";
import { closeEdit, editTodo } from "../features/todos/todosSlice";
import ReactDOM from "react-dom";
import React, { useRef } from "react";
import back from "../assets/back.svg";
import save from "../assets/save.svg";

export default function EditModal({ isOpen, id, content }) {
  const dispatch = useDispatch();
  const input = useRef();

  const handleEdit = () => {
    dispatch(editTodo({ id: id, content: input.current.value }));
    handleCloseModal();
  };

  const handleCloseModal = () => {
    dispatch(closeEdit());
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="modal">
        <img
          onClick={handleCloseModal}
          src={back}
          className="modal__button"
          alt="back button"
        />
        <div className="modal__container">
          <input
            ref={input}
            maxLength="70"
            className="form__input"
            placeholder="Edit Todo-Task"
            type="text"
            name="content"
            defaultValue={content}
          />
          <img
            onClick={handleEdit}
            src={save}
            className="modal__button"
            alt="save button"
          />
        </div>
      </div>
    </div>,
    document.querySelector("#portal")
  );
}
