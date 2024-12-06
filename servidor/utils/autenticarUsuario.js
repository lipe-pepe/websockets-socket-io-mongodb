import { scryptSync, timingSafeEqual } from "crypto";

function autenticarUsuario(senhaDigitada, usuario) {
  const hashTeste = scryptSync(senhaDigitada, usuario.salSenha, 64); // cria uma hash de teste para comparar com a hash do usuario

  const hashReal = Buffer.from(usuario.hashSenha, "hex");

  return timingSafeEqual(hashTeste, hashReal);
}

export default autenticarUsuario;
