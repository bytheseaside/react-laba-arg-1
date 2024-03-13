import { useDispatch, useSelector } from 'react-redux';
import { showEditInput, todoDeleted } from '@features/todo/todo-slice';
import { Edit, Delete } from '../buttons';
import { EditTodo } from '.';

export default function TodoItem({ data }) {
  const { todoSelected } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(todoDeleted(data.id));
  }

  const showEditTodo = () => dispatch(showEditInput(data.id));

  return (
    <div className="todo">
      {todoSelected === data.id ? (
        <EditTodo data={data} />
      ) : (
        <>
          <div className="input">{data.value}</div>
          <div className="todo__options">
            <Edit onClick={showEditTodo} className="todo__options__button" />
            <Delete onClick={handleDelete} className="todo__options__button" />
          </div>
        </>
      )}
    </div>
  );
}
