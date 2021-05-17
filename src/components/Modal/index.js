import React from "react";
import "./style.css";
import background from "../../assets/background.png";

const Modal = ({hidden}) => (
  <div className="modal">
    <img className="background" src={background} alt="" />
    <div className="content">
      <div className="header">
        <h1>Cifra de Vigenère</h1>
        <button onClick={hidden}>
          <i className="bi-arrow-left-short" role="img" aria-label="Voltar"></i>
        </button>
      </div>
      <q cite="https://github.com/GustavoTxFreitas/react-vigenere-cipher">
        A cifra de Vigenère é um método de criptografia, que utiliza uma série
        de cifras de César (gerada a partir de uma palavra chave).
      </q>

      <ul>
        <li>Digite a chave (senha) que protege o texto;</li>
        <li>Agora, escreva o texto que quer codificar/decifrar;</li>
        <li className="text-light">
          <s>
            Faça um programa que corte uma batata em rodelas; (Sem usar vetor!)
          </s>
        </li>
        <li>Aperte um dos elegantes botões;</li>
      </ul>

      <p>E pronto!</p>

      <div className="footer">
        <hr />
        <p>
          O código fonte desta aplicação está sob a licença MIT, confira o
          código fonte{" "}
          <a href="https://github.com/GustavoTxFreitas/react-vigenere-cipher">
            clicando aqui
          </a>
          .
        </p>
      </div>
    </div>
  </div>
);

export default Modal;
