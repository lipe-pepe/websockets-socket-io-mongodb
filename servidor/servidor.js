// Módulos próprios do Node
import url from "url";
import path from "path";
import http from "http";

import express from "express";
import { Server } from "socket.io";
import "../servidor/db/dbConnect.js";

const PORTA = process.env.PORTA || 3000;
const app = express();

const caminhoAtual = url.fileURLToPath(import.meta.url); // Dá o caminho atual
const diretorioPublico = path.join(caminhoAtual, "../../public");
// Configura o express para usar o diretório público de forma estática
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(PORTA, () => {
  console.log(`Servidor escutando na porta ${PORTA}`);
});

// Cria um servidor com métodos do Socket.Io incluídos
const io = new Server(servidorHttp);

export default io;
