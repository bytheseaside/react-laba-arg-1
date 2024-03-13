import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  todoSelected: '',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    showEditInput: (state, action) => ({ ...state, todoSelected: action.payload }),
    hideEditInput: (state) => ({ ...state, todoSelected: '' }),
    todoAdded: (state, action) => {
      if (!action.payload) return;

      const newTodo = {
        id: Math.random().toString(36).substring(2, 9),
        value: action.payload,
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    },
    todoEdited: (state, action) => {
      const { newValue, id } = action.payload;
      return {
        ...state,
        todos: [...state.todos.map((todo) => (todo.id === id ? { id, value: newValue } : todo))],
        todoSelected: '',
      };
    },
    todoDeleted: (state, action) => {
      state.todos = [...state.todos.filter((todo) => todo.id !== action.payload)];
    },
  },
});

export const { showEditInput, hideEditInput, todoAdded, todoEdited, todoDeleted } = todoSlice.actions;
export default todoSlice.reducer;
