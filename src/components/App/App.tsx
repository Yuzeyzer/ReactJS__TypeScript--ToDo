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
  const addTodo = (text: string) => {
    const newTodo: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodo);
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
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </Fragment>
  );
};
export default App;
