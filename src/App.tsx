import React from 'react';

function App(): JSX.Element {
  const sum = (a: number, b: number) => a + b;
return <div className='App'>Hello!{sum(1,5)}</div>;
}

export default App;
