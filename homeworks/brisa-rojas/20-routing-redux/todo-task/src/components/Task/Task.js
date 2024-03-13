import { useState } from 'react';
import './styles.css';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

function Task({ id, todo, deleteTask, editTask }) {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [todoText, setTodoText] = useState(todo);

  const handleEnterKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsBeingEdited(false);
      editTask({ id, todoText: todoText });
      event.target.blur(); //takes focus out of input
    }
    return;
  };

  const shouldElementBeFocused = (event) => {
    event.preventDefault();
    if (isBeingEdited) {
      event.target.focus();
    } else {
      event.target.blur();
    }
  };

  return (
    <div className={'task ' + (isBeingEdited ? 'task_editing-enabled' : 'task_editing-disabled')}>
      <input
        key={'task text ' + id}
        type="text"
        value={todoText}
        className="task__text"
        readOnly={!isBeingEdited}
        onKeyDown={handleEnterKeyDown}
        onFocus={shouldElementBeFocused}
        onChange={(event) => setTodoText(event.target.value)}
      />
      <img
        key={'edit icon ' + id}
        src={editIcon}
        alt="edit task"
        className="task__icon task__edit"
        onClick={() => {
          setIsBeingEdited(!isBeingEdited);
          if (isBeingEdited) {
            editTask({ id: id, todoText: todoText });
          }
        }} // toggle edit mode and save changes to store if it was being edited before
      />
      <img
        key={'delete icon ' + id}
        src={deleteIcon}
        alt="delete task"
        className="task__icon task__delete"
        onClick={() => {
          deleteTask(id);
        }}
      />
    </div>
  );
}

export default Task;
