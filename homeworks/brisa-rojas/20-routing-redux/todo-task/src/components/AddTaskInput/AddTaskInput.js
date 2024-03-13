import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../../app/tasksSlice';
import './styles.css';

function AddTaskInput() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const sendTodoToStore = () => {
    if (!inputValue.trim()) {
      return null;
    } // if input is empty, do nothing
    dispatch(addToDo(inputValue));
    setInputValue('');
  };

  return (
    <div className="main-input">
      <input
        type="text"
        placeholder="Create Todo-Task"
        className="main-input__input"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') sendTodoToStore();
        }}
      />
      <button className="main-input__button" onClick={sendTodoToStore}>
        Add
      </button>
    </div>
  );
}
export default AddTaskInput;
