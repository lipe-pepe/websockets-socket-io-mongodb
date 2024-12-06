import {
  encontrarDocumento,
  atualizaDocumento,
  excluirDocumento,
} from "../db/documentosDb.js";

function registrarEventosDocumento(socket, io) {
  // Configuramos para ouvir um evento personalizado
  socket.on("selecionar_doc", async (nomeDoc, callbackTexto) => {
    // * Esse método join do Socket.io coloca o cliente numa sala com o nome dele.
    // * Sala é um conceito do Socket.io e de WebSockets que agrupa conexões e clientes.
    socket.join(nomeDoc);
    const documento = await encontrarDocumento(nomeDoc);
    if (documento) {
      //   socket.emit("texto_documento", documento.texto); // emite para apenas o cliente atual do socket, seria outra forma de fazer
      callbackTexto(documento.texto);
    }
  });

  socket.on("editor_texto", async ({ texto, nomeDoc }) => {
    const atualizacao = await atualizaDocumento(nomeDoc, texto);
    if (atualizacao.modifiedCount) {
      socket.to(nomeDoc).emit("editor_texto_clientes", texto); // envia o evento para todos os clientes menos para o cliente atual
    }
  });

  socket.on("excluir_documento", async (nomeDoc) => {
    const resultado = await excluirDocumento(nomeDoc);
    if (resultado.deletedCount) {
      io.emit("excluir_documento_sucesso", nomeDoc); // envia para todos que estiverem na página
    }
  });
}

export default registrarEventosDocumento;
