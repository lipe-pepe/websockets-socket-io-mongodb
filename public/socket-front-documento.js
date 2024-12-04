import { atualizaTextoEditor, alertarExclusao } from "./documento.js";

// Estabelece a conexão do web socket
const socket = io();

function selecionarDoc(nome) {
  socket.emit("selecionar_doc", nome, (texto) => {
    atualizaTextoEditor(texto);
  });
}

function emitirTextoEditor(dados) {
  socket.emit("editor_texto", dados);
}

function emitirExcluirDocumento(nome) {
  socket.emit("excluir_documento", nome);
}

// socket.on("texto_documento", (texto) => {
//   atualizaTextoEditor(texto);
// });

socket.on("editor_texto_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

socket.on("excluir_documento_sucesso", (nome) => {
  alertarExclusao(nome);
});

export { emitirTextoEditor, selecionarDoc, emitirExcluirDocumento };
