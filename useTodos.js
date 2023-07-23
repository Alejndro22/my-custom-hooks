import { useEffect, useReducer } from 'react';
import { toDoReducer } from '../08-useReducer/toDoReducer';

// Get toDos from browser local storage, if null return []
const init = () => {
  return JSON.parse(localStorage.getItem('toDos')) || [];
};

export const useTodos = () => {
  // initialArg: The value from which the initial state is calculated. It can be a value of any type.
  // init: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg.
  const [toDos, dispatch] = useReducer(toDoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos) || []);
  }, [toDos]);

  const handleNewToDo = (toDo) => {
    const action = {
      type: '[TODO] Add new task',
      payload: toDo,
    };

    dispatch(action);
  };

  const handleRemoveToDo = (id) => {
    const action = {
      type: '[TODO] Remove task',
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleToDo = (id) => {
    const action = {
      type: '[TODO] Toggle task',
      payload: id,
    };

    dispatch(action);
  };

  return {
    toDos,
    toDosCount: toDos.length,
    pendingToDosCount: toDos.filter((toDo) => !toDo.done).length,
    handleNewToDo,
    handleRemoveToDo,
    handleToggleToDo,
  };
};
