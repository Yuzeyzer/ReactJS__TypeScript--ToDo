import React, { Fragment, useState } from 'react';

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
