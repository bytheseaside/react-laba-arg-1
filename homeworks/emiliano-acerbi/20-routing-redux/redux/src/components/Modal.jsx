import React from 'react';

function Modal({ todo, setNewInputValue, newInputValue, handleEditTodo, handleCancelEdit, editModal }) {
  return (
    <form
      className={`absolute flex flex-col gap-5 bg-[#8c72b7] shadow-md p-8 scale-0 ${
        editModal && 'scale-100'
      } duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
    >
      <p>
        <span className="font-bold">Selected todo:</span> {todo.text}
      </p>

      <label className="flex items-center">
        <p className="w-36 font-bold">New input:</p>
        <input
          type="text"
          className="w-full p-1 outline-none"
          onChange={(e) => setNewInputValue(e.target.value)}
          value={newInputValue}
        />
      </label>

      <div className="flex gap-3">
        <button
          className=" bg-neutral-100 hover:bg-neutral-300 p-2 w-28 shadow-sm"
          type="submit"
          onClick={(e) => handleEditTodo(e, todo.id)}
        >
          Edit
        </button>
        <button className=" bg-red-300 hover:bg-red-400 p-2 w-28 shadow-sm" onClick={(e) => handleCancelEdit(e)}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Modal;
