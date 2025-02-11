import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

// Dados simulados
const produtos = [
  { id: 1, nome: 'Arroz', preco: 5.99 },
  { id: 2, nome: 'Feijão', preco: 7.50 },
  { id: 3, nome: 'Café', preco: 15.00 },
  { id: 4, nome: 'Açúcar', preco: 4.50 },
  { id: 5, nome: 'Óleo', preco: 8.75 },
];

// Middleware para permitir requisições de outras origens
app.use(cors());

// Rota para retornar os produtos
app.get('/api/produtos', (req, res) => {
  try {
    res.status(200).json(produtos); // Certifique-se de que está retornando dados válidos em JSON
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
