import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://**********:**********@cluster0.ugo2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

let documentosColecao;
try {
  await client.connect();
  const db = client.db("alura-websockets");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
