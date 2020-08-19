import React, { Fragment, useState } from 'react';
import { FormElem } from './types';
import { ITodo } from './interfaces';

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };
  const addTodo = (text: string): void => {
    const newTodo: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodo);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} required />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo: ITodo, index: number) => (
          <Fragment>
            <li key={index}>{todo.text}</li>
            <button type='button' onClick={() => completeTodo(index)}>
              {todo.complete ? 'Incomplete' : 'Complete'}
            </button>
          </Fragment>
        ))}
      </ul>
    </Fragment>
  );
};
export default App;
