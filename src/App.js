import React, { useState } from 'react';
import Input from './components/Input';

function App() {
  const [key, setKey] = useState('');
  const [text, setText] = useState('');

  return (
    <div className='App'>
      
      <Input label='key' value={key} setValue={setKey} />
      <Input label='text' value={text} setValue={setText} />

      <button onClick={() => alert(`${key} ${text.length}`)}>
          Criar Keyword
      </button>
      
    </div>
  );
}

export default App;
