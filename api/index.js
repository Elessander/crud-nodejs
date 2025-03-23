import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.js";
import { db } from "./db.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", productRoutes);

db.connect((err) => {
  if (err) {
    console.error("Falha crítica na conexão com o Banco de Dados:", err);
    process.exit(1); 
  }

  console.log("MySQL conectado e banco/tabela verificados!");
  
  app.listen(8800, () => {
    console.log("Servidor rodando na porta 8800");
  });
});