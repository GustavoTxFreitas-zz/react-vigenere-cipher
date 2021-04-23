import React from "react";
import "./style.css";

function Modal({ hidden }) {
  return (
    <div className={hidden ? "hidden" : "container center"}>
      <div className="modal">
        <div className="content">
          <h1>Cifra de Vigenère</h1>

          <p>
            A cifra de Vigenère é um método de criptografia de substituição
            polialfabética, que usa uma série cifras de César baseadas nas
            letras de uma palavra chave.
          </p>

          <p>
            Todos os direitos reservados,{" "}
            <a href="https://github.com/GustavoTxFreitas">Gustavo Teixeira</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
