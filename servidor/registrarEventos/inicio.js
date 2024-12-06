import {
  encontrarDocumento,
  obterDocumentos,
  adicionarDocumento,
} from "../db/documentosDb.js";

function registrarEventosInicio(socket, io) {
  socket.on("obter_documentos", async (devolverDocumentos) => {
    const documentos = await obterDocumentos();
    devolverDocumentos(documentos);
  });

  socket.on("adicionar_doc", async (nomeDoc) => {
    const documentoExiste = (await encontrarDocumento(nomeDoc)) !== null;

    if (documentoExiste) {
      socket.emit("documento_existente", nomeDoc);
    } else {
      const resultado = await adicionarDocumento(nomeDoc);
      if (resultado.acknowledged) {
        io.emit("adicionar_documento_interface", nomeDoc); // envia para todos que estiverem na página
      }
    }
  });
}

export default registrarEventosInicio;
