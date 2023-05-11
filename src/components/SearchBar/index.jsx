import React, { useState } from "react";
import cursosData from "./cursos.json";
import "./seu-arquivo-de-estilo.scss";

const CursosEAD = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const results = cursosData.filter((curso) =>
      curso.titulo.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar cursos..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="search-results">
          {searchResults.map((curso) => (
            <div key={curso.id}>{curso.titulo}</div>
          ))}
        </div>
      </div>

      <div className="treatments">
        {searchResults.map((curso) => (
          <div key={curso.id} className="treatmentsItem">
            <h3>{curso.titulo}</h3>
            <p>{curso.descricao}</p>
            <p>{curso.duracao}</p>
            {/* Adicione mais informações do curso conforme necessário */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CursosEAD;
