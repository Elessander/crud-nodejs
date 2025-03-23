import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL!");

  db.query("CREATE DATABASE IF NOT EXISTS crud", (err) => {
    if (err) {
      console.error("Erro ao criar banco de dados:", err);
      return;
    }
    console.log("Banco de Dados criado com sucesso!");

    db.query("USE crud", (err) => {
      if (err) {
        console.error("Erro ao selecionar banco crud:", err);
        return;
      }

      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS produtos (
          id INT NOT NULL AUTO_INCREMENT,
          nome VARCHAR(255),
          codigo VARCHAR(50) NOT NULL,
          descricao VARCHAR(255) NULL,
          preco DECIMAL(10,2),
          PRIMARY KEY (id)
        )`;

      db.query(createTableQuery, (err) => {
        if (err) {
          console.error("Erro ao criar tabela:", err);
          return;
        }
        console.log("Tabela criada com sucesso!");
      });
    });
  });
});

process.on('exit', () => {
  db.end();
  console.log('Conexão com MySQL encerrada');
});