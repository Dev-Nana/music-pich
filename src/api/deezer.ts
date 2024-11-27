import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async (req: VercelRequest, res: VercelResponse) => {
  const { q, limit } = req.query;

  try {
    const response = await axios.get('https://api.deezer.com/search', {
      params: { q, limit },
    });
    console.log("Resposta da Deezer: ", response.data);  // Verifique a resposta da Deezer no backend

    res.status(200).json(response.data); // Retorne os dados para o frontend
  } catch (error) {
    console.error("Erro na API do Deezer: ", error);  // Adicione o log de erro
    res.status(500).json({ error: 'Erro ao buscar músicas' });
  }
};
