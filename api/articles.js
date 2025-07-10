import axios from "axios";

const URL_API =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=90b0a1e6642449088471333a43bcb4c2";

export default async function handler(req, res) {
  try {
    const response = await axios.get(URL_API);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    res.status(500).json({ message: "Erro ao buscar artigos." });
  }
}
