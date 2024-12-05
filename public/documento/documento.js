import {
  emitirExcluirDocumento,
  emitirTextoEditor,
  selecionarDoc,
} from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search); // isso é código específico do frontend
const nomeDoc = parametros.get("nome");

const editorTexto = document.getElementById("editor-texto");
const tituloDoc = document.getElementById("titulo-documento");
const botaoExcluir = document.getElementById("excluir-documento");

tituloDoc.textContent = nomeDoc || "Documento sem título";

selecionarDoc(nomeDoc);

editorTexto.addEventListener("keyup", () => {
  emitirTextoEditor({ texto: editorTexto.value, nomeDoc: nomeDoc });
});

botaoExcluir.addEventListener("click", () => {
  emitirExcluirDocumento(nomeDoc);
});

function atualizaTextoEditor(texto) {
  editorTexto.value = texto;
}

function alertarExclusao(nome) {
  if (nome === nomeDoc) {
    alert(`Documento ${nome} excluído!`);
    window.location.href = "/";
  }
}

export { atualizaTextoEditor, alertarExclusao };
