import axios from "axios";
import cors from "cors";
import express from "express";

const URL_API =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=90b0a1e6642449088471333a43bcb4c2";

const app = express();

app.use(cors());

app.get("/articles", async (_req, res) => {
  try {
    const response = await axios.get(URL_API);
    //res.json(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar artigos." });
  }
});

app.listen(3333, () => {
  console.log("Server running port: 3333...");
});
