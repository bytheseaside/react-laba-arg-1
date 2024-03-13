import { createSlice, nanoid } from '@reduxjs/toolkit';

let initialState = [];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addToDo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(todoText) {
        return {
          payload: {
            id: nanoid(),
            todoText: todoText,
          },
        };
      },
    },
    deleteToDo: {
      reducer(state, action) {
        return state.filter((task) => task.id !== action.payload);
      },
    },
    editToDo: {
      reducer(state, action) {
        let task = state.find((task) => task.id === action.payload.id);
        let index = state.indexOf(task);
        state[index]['todoText'] = action.payload.todoText;
      },
    },
  },
});

export const { addToDo, deleteToDo, editToDo } = tasksSlice.actions;

export default tasksSlice.reducer;
