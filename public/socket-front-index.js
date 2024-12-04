import { inserirLinkDoc, removerLinkDoc } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentosDevolvidos) => {
  documentosDevolvidos.forEach((documento) => {
    inserirLinkDoc(documento.nome);
  });
});

function emitirAdicionarDoc(nome) {
  socket.emit("adicionar_doc", nome);
}

socket.on("adicionar_documento_interface", (nome) => {
  inserirLinkDoc(nome);
});

socket.on("documento_existente", (nome) => {
  alert(`O documento ${nome} já existe`);
});

socket.on("excluir_documento_sucesso", (nome) => {
  removerLinkDoc(nome);
});

export { emitirAdicionarDoc };
