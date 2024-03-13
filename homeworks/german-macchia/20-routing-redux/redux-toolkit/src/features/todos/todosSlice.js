import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const initialState = {
  entries: [],
  edit: {
    open: false,
    id: null,
    content: null,
  },
};

//immer library handles reducers type
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      return {
        ...state,
        entries: [...state.entries, { id: id++, content: payload.content }],
      };
    },
    deleteTodo: (state, { payload }) => {
      return {
        ...state,
        entries: [...state.entries.filter((todo) => todo.id !== payload.id)],
      };
    },
    openEdit: (state, { payload }) => {
      return {
        ...state,
        edit: {
          open: true,
          id: parseInt(payload.id),
          content: payload.content,
        },
      };
    },
    closeEdit: (state) => {
      return {
        ...state,
        edit: {
          open: false,
          id: null,
          content: null,
        },
      };
    },
    editTodo: (state, { payload }) => {
      return {
        ...state,
        entries: [
          ...state.entries.map((todo) => {
            if (todo.id === parseInt(payload.id)) {
              return {
                id: payload.id,
                content: payload.content,
              };
            }
            return todo;
          }),
        ],
      };
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  openEdit,
  closeEdit,
  editTodo,
} = todosSlice.actions;
//imported in store
export default todosSlice.reducer;
