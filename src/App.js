import React, { useState } from 'react';
import Input from './components/Input';

function App() {
  const [key, setKey] = useState('');
  const [text, setText] = useState('');

  const createKeyword = () => {
    var keyword = '', i = 0;
    while(keyword.length < text.length){
      if(i === key.length) i = 0;
      
      keyword += key[i];
      i++
    }

    alert(keyword);
  }

  return (
    <div className='App'>
      
      <Input label='key' value={key} setValue={setKey} />
      <Input label='text' value={text} setValue={setText} />

      <button onClick={createKeyword}>
          Criar Keyword
      </button>
      
    </div>
  );
}

export default App;
