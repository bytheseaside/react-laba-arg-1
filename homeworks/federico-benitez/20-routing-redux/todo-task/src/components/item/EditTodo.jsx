import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { hideEditInput, todoEdited } from '@features/todo/todo-slice';

export default function EditTodoInput({ data }) {
  const [value, setValue] = useState(data.value);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleChange = (e) => setValue(e.target.value);

  function handleEdit() {
    dispatch(
      todoEdited({
        id: data.id,
        newValue: value,
      }),
    );
  }

  useEffect(() => {
    //To cancel edit clicking outside of the component
    const clickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        dispatch(hideEditInput());
      }
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="todo">
      <input className="input" type="text" value={value} onChange={handleChange} />
      <button className="button__add" onClick={handleEdit}>
        Save
      </button>
    </div>
  );
}
