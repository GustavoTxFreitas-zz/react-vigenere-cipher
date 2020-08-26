import React, { useState } from 'react';
import Input from './components/Input/';
import Button from './components/Button/';
import './general.css'

function App() {
  const [key, setKey] = useState('');
  const [text, setText] = useState('');

  // Criar uma chave de criptografia
  const createKeyword = (keyword, length) => {
    for (var i = 0; keyword.length < length; i++) {
      if (i === key.length) i = 0;
      keyword += key[i];
    }
    return keyword;
  }

  // Criptografar o texto a partir da chave
  function cipherText() {
    var x = text.length;
    var keyword = createKeyword('', x);

    var newText = '';
    for (var i = 0; i < x; i++) {
      newText += String.fromCharCode((text.charCodeAt(i) + keyword.charCodeAt(i)) % 26 + 65);
    }
    alert(newText);
  }

  // Descriptografar o texto a partir da chave
  const originText = () => {
    var x = text.length;
    var keyword = createKeyword('', x);

    var newText = '';
    for (var i = 0; i < x; i++) {
      newText += String.fromCharCode((text.charCodeAt(i) - keyword.charCodeAt(i) + 26) % 26 + 65);
    }
    alert(newText);
  }

  return (
    <div id='App'>
      <Input label='key' value={key} setValue={setKey} />
      <Input label='text' value={text} setValue={setText} />

      <div id='buttonContainer'>
        <Button event={cipherText} text='Criptografar' />
        <Button event={originText} text='Decifrar' />
      </div>

    </div>
  );
}

export default App;
