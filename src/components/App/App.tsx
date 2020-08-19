import React, { Fragment, useState } from 'react';
import { FormElem } from './types';
import { ITodo } from './interfaces';

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    setValue('e');
  };
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} required />
        <button type='submit'>Add Todo</button>
      </form>
    </Fragment>
  );
};
export default App;
