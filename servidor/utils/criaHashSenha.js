import { randomBytes, scryptSync } from "crypto";

function criaHashSenha(senhaDigitada) {
  const salSenha = randomBytes(16).toString("hex"); // Cria o sal da senha aleatório
  const hashSenha = scryptSync(senhaDigitada, salSenha, 64).toString("hex"); // Cria o hash da senha
  return { hashSenha, salSenha };
}

export default criaHashSenha;
