import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    text: 'Learn React',
  },
  {
    id: 2,
    text: 'Learn Node',
  },
];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo));
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
