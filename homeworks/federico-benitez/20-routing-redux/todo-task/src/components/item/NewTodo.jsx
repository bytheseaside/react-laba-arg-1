import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdded } from '@features/todo/todo-slice';
import { Add } from '../buttons';

export default function NewTodoInput() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  function handleAdd() {
    dispatch(todoAdded(value));
    setValue('');
  }

  return (
    <div className="todo">
      <input className="input" type="text" value={value} onChange={handleChange} />
      <Add className="button__add" onClick={handleAdd} />
    </div>
  );
}
