export const toDoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add new task':
      return [...initialState, action.payload];

    // here I can use filter and map because they create new arrays, always avoid to mutate the original state
    case '[TODO] Remove task':
      return initialState.filter((todo) => todo.id !== action.payload);

    case '[TODO] Toggle task':
      return initialState.map((toDo) => {
        if (toDo.id === action.payload) {
          return {
            ...toDo,
            done: !toDo.done,
          };
        }

        return toDo;
      });

    default:
      return initialState;
  }
};
