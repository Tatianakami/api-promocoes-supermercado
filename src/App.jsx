import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProdutos, setFilteredProdutos] = useState([]);

  // Busca os produtos da API ao carregar o componente
  useEffect(() => {
    fetch('/api/produtos')

 // Requisição para o backend via proxy do Vite
      .then((response) => response.json())
      .then((data) => {
        console.log('Produtos carregados:', data);
        setProdutos(data);
        setFilteredProdutos(data); // Inicializa com todos os produtos
      })
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  // Função para filtrar os produtos com base na pesquisa
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredProdutos(produtos); // Mostra todos os produtos se a pesquisa estiver vazia
    } else {
      const query = searchQuery.trim().toLowerCase(); // Remover espaços extras e converter para minúsculo
      const filtered = produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(query) // Compara o nome do produto com a pesquisa
      );
      console.log('Produtos filtrados:', filtered); // Verifique os resultados do filtro
      setFilteredProdutos(filtered);
    }
  };
  

  return (
    <div className="container">
      <h1>Promoções de Supermercado</h1>

      {/* Campo de pesquisa e botão */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Digite o nome do produto..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Pesquisar
        </button>
      </div>

      {/* Exibição dos produtos */}
      <div className="items-container">
        {filteredProdutos.length > 0 ? (
          filteredProdutos.map((produto) => (
            <div key={produto.id} className="item">
              <h3>{produto.nome}</h3>
              <p>Preço: R${produto.preco.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default App;