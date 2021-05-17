import React, { useState } from "react";
import { faKey, faFont } from "@fortawesome/free-solid-svg-icons";

import Input from "./components/Input";
import Button from "./components/Button";
// import Container from "./components/Container";
import Modal from "./components/Modal";

import "./styles/layout.css";
import "./styles/font.css";

const App = () => {
  const [hidden, setHidden] = useState(true);
  const [key, setKey] = useState("");
  const [text, setText] = useState("");
  const display = document.querySelector("div#column1");

  // Criar uma chave de criptografia
  const createKeyword = (keyword, length) => {
    for (var i = 0; keyword.length < length; i++) {
      if (i === key.length) i = 0;
      keyword += key[i];
    }
    return keyword;
  };

  // Criptografar o texto a partir da chave
  function cipherText() {
    var x = text.length;
    var keyword = createKeyword("", x);

    var newText = "";
    for (var i = 0; i < x; i++) {
      if (!(text[i] >= "A" && text[i] <= "Z")) {
        newText += text[i];
        continue;
      }
      newText += String.fromCharCode(
        ((text.charCodeAt(i) + keyword.charCodeAt(i)) % 26) + 65
      );
    }
    display.innerHTML =
      "<p>Antes:</p><h1>" +
      text +
      '</h1><p>Depois:</p><h1 id="cor-secundaria">' +
      newText +
      "</h1>";
  }

  // Descriptografar o texto a partir da chave
  function originText() {
    var x = text.length;
    var keyword = createKeyword("", x);

    var newText = "";
    for (var i = 0; i < x; i++) {
      if (!(text[i] >= "A" && text[i] <= "Z")) {
        newText += text[i];
        continue;
      }
      newText += String.fromCharCode(
        ((text.charCodeAt(i) - keyword.charCodeAt(i) + 26) % 26) + 65
      );
    }
    display.innerHTML =
      "<p>Antes:</p><h1>" +
      text +
      '</h1><p>Depois:</p><h1 id="cor-secundaria">' +
      newText +
      "</h1>";
  }

  return (
    <div className="app">
      {hidden ? null : (
        <div id="modal-container">
          <Modal hidden={() => setHidden(true)} />
        </div>
      )}
      <span className="background">2021</span>
      <div className="container">
        <Input
          label="Insira uma Chave"
          icon={faKey}
          value={key}
          setValue={setKey}
        />

        <Input
          label="Insira um Texto"
          icon={faFont}
          value={text}
          setValue={setText}
        />

        <div id="buttonContainer">
          <Button event={cipherText} text="Criptografar" />

          <Button event={originText} text="Decifrar" />
        </div>
        <Button event={() => setHidden(false)} text="?" />
      </div>
    </div>
  );
};

export default App;
