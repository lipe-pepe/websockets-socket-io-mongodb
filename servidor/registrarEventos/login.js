import { encontrarUsuario } from "../db/usuariosDb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";

function registrarEventosLogin(socket, io) {
  socket.on("autenticar_usuario", async ({ usuario, senha }) => {
    const u = await encontrarUsuario(usuario);
    if (u) {
      const autenticado = autenticarUsuario(senha, u);
      if (autenticado) {
        socket.emit("autenticacao_sucesso");
      } else {
        socket.emit("autenticacao_erro");
      }
    } else {
      socket.emit("usuario_nao_encontrado");
    }
  });
}

export default registrarEventosLogin;
