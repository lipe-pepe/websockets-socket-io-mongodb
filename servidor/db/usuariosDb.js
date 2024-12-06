import criaHashSenha from "../utils/criaHashSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function cadastrarUsuario({ usuario, senha }) {
  const { hashSenha, salSenha } = criaHashSenha(senha);
  return usuariosColecao.insertOne({
    nome: usuario,
    hashSenha: hashSenha,
    salSenha: salSenha,
  });
}

function encontrarUsuario(nome) {
  return usuariosColecao.findOne({ nome: nome });
}

export { cadastrarUsuario, encontrarUsuario };
