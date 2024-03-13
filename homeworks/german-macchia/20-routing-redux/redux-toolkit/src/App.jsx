import { EntryForm } from "./components/Form";
import { useSelector } from "react-redux";
import "./App.css";
import EditModal from "./components/EditModal";
import { Task } from "./components/Task";

function App() {
  const { entries } = useSelector((store) => store.todos);
  const { open, id, content } = useSelector((store) => store.todos.edit);

  const listEntries = () =>
    entries.map((todo) => <Task key={todo.id} todo={todo} />);

  return (
    <div className="app">
      <EntryForm />
      <EditModal isOpen={open} id={id} content={content} />
      <div className="todoList">{listEntries()}</div>
    </div>
  );
}

export default App;
