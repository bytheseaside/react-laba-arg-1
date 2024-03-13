import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload.title,
      };
       state.push(newTodo)
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, task: action.payload.newTodo } : todo));
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
