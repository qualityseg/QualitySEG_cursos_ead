import styles from "./styles.module.scss";

export const HeaderPage = ({ subtitle, title }) => {
  return (
    <section className={styles.headerPage}>
      <div className="mainContainer">
        <div className={styles.colunaCentralizada}>
          <img src="images/eadcursos.png" alt="Imagem EAD Cursos" />
          <p>A Quality Seg é uma empresa especializada em Engenharia de Segurança e Medicina do trabalho com atuação desde o ano de 2008, trabalhando e desenvolvendo política sustentável em gestão ocupacional.

          Disponibilizamos de uma estrutura completa e com equipe altamente qualificada de médicos do trabalho e especialistas para cuidar e zelar pela saúde integridade dos colaboradores.

          A Quality Seg conta com unidades próprias e credencias em todo o território nacional, com capacidade atual de 200 atendimentos diários, recentemente atingiu a marca de 300.000 capacitações.

          No ano de 2019 foi vencedora do Prêmio Empreendedores destacando ainda mais a atuação latente na comunidade lençoense.

          Com os cursos EAD da QualitySeg, é possível aprender sobre todas as NRs de forma prática e dinâmica, sem precisar sair de casa. Os cursos são elaborados por profissionais experientes e qualificados, que possuem amplo conhecimento sobre as NRs e suas aplicações práticas.

          Ao escolher estudar na QualitySeg, o aluno terá acesso a uma plataforma virtual intuitiva e interativa, que oferece recursos multimídia, como vídeos, simuladores e questionários, que auxiliam no processo de aprendizado.

          Os cursos EAD da QualitySeg são indicados para profissionais que desejam aprimorar seus conhecimentos sobre as NRs, bem como para empresas que precisam capacitar seus funcionários para atender às normas regulamentadoras.

          Ao concluir os cursos da QualitySeg, os alunos estarão aptos a identificar e avaliar os riscos presentes no ambiente de trabalho, além de saber como prevenir acidentes e doenças ocupacionais. Eles também terão conhecimento sobre as obrigações legais das empresas em relação às NRs, o que é fundamental para garantir um ambiente de trabalho seguro e saudável.

          Em resumo, a QualitySeg oferece cursos EAD completos e de qualidade sobre todas as Normas Regulamentadoras, que são essenciais para garantir a segurança e saúde dos trabalhadores e a conformidade das empresas com a legislação trabalhista. Se você busca aprimorar seus conhecimentos sobre as NRs ou capacitar seus funcionários, a QualitySeg é a escolha certa.</p>
        </div>
        
      </div>
    <div className={styles.barraVerde}>
      <p>CONHEÇA NOSSOS CURSOS EAD</p>
    </div>
    </section>
    
  );
};
