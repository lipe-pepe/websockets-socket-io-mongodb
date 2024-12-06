import "dotenv/config"; // Inicia o dotenv na aplicação, isso deve ser feito no arquivo mais externo

import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import io from "./servidor.js";
import registrarEventosLogin from "./registrarEventos/login.js";

io.on("connection", (socket) => {
  registrarEventosInicio(socket, io);
  registrarEventosDocumento(socket, io);
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
