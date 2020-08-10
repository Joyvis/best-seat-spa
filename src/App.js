import React from 'react';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router'

function App() {
  const router = useRouter()
  return (
    <div className="App">
      <header className="App-header">
        <Button color="primary" onClick={() => router.replace('/event/new')}>Hello World</Button>
      </header>
    </div>
  );
}

export default App;
