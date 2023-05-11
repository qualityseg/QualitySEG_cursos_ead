import { useState } from 'react';
import cursosData from './cursos.json';
import styles from './CursosEad.module.scss';

const CursosEad = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredResults = cursosData.filter((curso) =>
      curso.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <div className={styles.searchContainer}>
        <div className={styles['search-bar']}>
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className={`${styles.treatments} ${styles.center}`}>
        {searchResults.map((curso) => (
          <div
            className={styles.treatmentsItem}
            data-aos="fade-up"
            key={curso.id}
          >
            <div className={styles.image}>
              <img
                src={curso.imageSrc}
                alt={curso.titulo}
                className={styles.imageContent}
              />
            </div>
            <h3>{curso.titulo}</h3>
            <div className={styles.description}>
              <p>{curso.descricao}</p>
              <p>Carga Horaria: {curso.carga_horaria}</p>
              <p>Valor: {curso.valor}</p>
              <center>
                <button
                  className={styles.learnMoreButton}
                  onClick={() =>
                    (window.location.href =
                      'https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0')
                  }
                >
                  Clique e saiba mais
                </button>
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CursosEad;
