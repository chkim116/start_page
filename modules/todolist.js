const SET_TO_DO_LIST = "todolist/SET_TO_DO_LIST";

export const setTodoList = (input) => ({
  type: SET_TO_DO_LIST,
  payload: {
    id: Date.now(),
    todo: input,
  },
});

export function todolist(state = {}, action) {
  switch (action.type) {
    case SET_TO_DO_LIST:
      return {
        ...state,
        id: action.payload.id,
        todo: action.payload.todo,
      };

    default:
      return state;
  }
}

export default todolist;
