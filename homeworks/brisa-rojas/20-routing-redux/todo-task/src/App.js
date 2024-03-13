import './App.css';
import { deleteToDo, editToDo } from './app/tasksSlice';
import AddTaskInput from './components/AddTaskInput/AddTaskInput';
import Task from './components/Task/Task';
import { useSelector, useDispatch } from 'react-redux';

function App(props) {
  const dispatch = useDispatch();
  let tasks = useSelector((state) => state.tasks);

  function deleteTask(id) {
    dispatch(deleteToDo(id));
  }

  function editTask(id, todoText) {
    dispatch(editToDo(id, todoText));
  }

  return (
    <div className="App">
      <AddTaskInput />
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} todo={task.todoText} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
}

export default App;
