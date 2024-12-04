import { emitirAdicionarDoc } from "./socket-front-index.js";

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");

// Ouve quando enviamos um form
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  emitirAdicionarDoc(inputDocumento.value);
  inputDocumento.value = "";
});

// Insere um link para um documento
function inserirLinkDoc(nomeDoc) {
  listaDocumentos.innerHTML += `
        <a
          href="documento.html?nome=${nomeDoc}"
          class="list-group-item list-group-item-action"
          id="documento-${nomeDoc}"
        >
          ${nomeDoc}
        </a>`;
}

function removerLinkDoc(nomeDoc) {
  const documento = document.getElementById(`documento-${nomeDoc}`);
  listaDocumentos.removeChild(documento);
}

export { inserirLinkDoc, removerLinkDoc };
