import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

export default function Tratamentos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>QualitySEG Cursos EAD</title>
        <meta
          name="description"
          content="QualitySEG Cursos EAD - Treinamentos de Normas Regulativas Online"
        />
        <meta
          name="keywords"
          content="Quality Seg é uma empresa especializada em Engenharia de Segurança e Medicina do trabalho"
        />
        <meta name="author" content=" Eletro Santa Clara" />
      </Head>

      <div>
        <HeaderPage src="/images/cursosead.png" text="Produtos Certificados." />
      </div>
      <main className={`${styles.treatments} mainContainer`}>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/5s.webp"
            alt="5S - Ferramentas da Qualidade - Contínuo"
            width="410"
            height="230"
            
          />
          <h3>5S - Ferramentas da Qualidade - Contínuo</h3>
          <div className={styles.description}>
            <p>
            O curso aborda como garantir uma gestão de qualidade por meio da metodologia 5S. Um método rápido, econômico, eficaz e mundialmente utilizado em organizações. Neste curso, o aluno será capacitado a aplicar a metodologia dentro da empresa onde atua e no dia a dia da sua vida.
            </p>
            <p>Carga Horaria: 2h</p><p>Valor: R$ 109,90</p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center>
          </div>
        </div>




        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/analise-de-risco.webp"
            alt="Análise de Riscos"
            width="410"
            height="230"
          />
          <h3>Análise de Riscos</h3>
          <div className={styles.description}>
            <p>
            Este curso tem como finalidade apresentar conceitos básicos da Análise de Riscos, assim como as metodologias existentes e as etapas de execução para sua aplicação.
            </p>

            <p>Carga Horaria: 12h</p><p>Valor: R$ 119,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/APH-B.webp"
            alt="Atendimento Pré Hospitalar (Primeiros Socorros) Básico"
            width="410"
            height="230"
            
          />
          <h3>Atendimento Pré Hospitalar (Primeiros Socorros) Básico</h3>
          <div className={styles.description}>
            <p>
            Capacitar o aluno na realização de ações emergenciais em caso de acidentes industriais ou domésticos. Embora o conteúdo do curso esteja aberto a todos os interessados em ingressar nesta área, alunos com experiência anterior em áreas afins terão melhor aproveitamento devido à sua realidade profissional.
            </p>
            <p>Carga Horaria: 9h</p><p>Valor: R$ 129,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>




        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/APH-I.webp"
            alt="Atendimento Pré Hospitalar (Primeiros Socorros) Intermediário"
            width="410"
            height="230"
          />
          <h3>Atendimento Pré Hospitalar (Primeiros Socorros) Intermediário</h3>
          <div className={styles.description}>
            <p>
            Capacitar o aluno na realização de ações emergenciais em caso de acidentes industriais ou domésticos. Embora o conteúdo do curso esteja aberto a todos os interessados em ingressar nesta área, alunos com experiência anterior em áreas afins terão melhor aproveitamento devido à sua realidade profissional.
            </p>
            <p>Carga Horaria: 18h</p><p>Valor: R$ 139,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>        

        

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/AVALIACAO-GERAL-CENA.webp"
            alt="Avaliação Geral de Cena"
            width="410"
            height="230"
            
          />
          <h3>Avaliação Geral de Cena</h3>
          <div className={styles.description}>
            <p>
            Este curso tem como objetivos torná-lo apto a realizar a avaliação geral do paciente; diferenciar Avaliação Dirigida para trauma de Avaliação dirigida para emergência médica; aferir sinais vitais.
            </p>
            <p>Carga Horaria: 1h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/Direcao-def.webp"
            alt="Direção Defensiva para Motoristas de Caminhão"
            width="410"
            height="230"
            
          />
          <h3>Direção Defensiva para Motoristas de Caminhão</h3>
          <div className={styles.description}>
            <p>
            Este curso têm como objetivo capacitar os motoristas profissionais para a condução de veículos de forma preventiva, evitar comportamentos inadequado durante a condução e evitar acidentes de trânsito.
            </p>
            <p>Carga Horaria: 4h</p><p>Valor: R$ 159,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/34.jpg"
            alt="Direção Preventiva para Frotistas"
            width="410"
            height="230"
            
          />
          <h3>Direção Preventiva para Frotistas</h3>
          <div className={styles.description}>
            <p>
            Este curso têm como objetivo capacitar os motoristas profissionais para a condução de veículos de forma preventiva, evitar comportamentos inadequado durante a condução e evitar acidentes de trânsito.
            </p>
            <p>Carga Horaria: 4h</p><p>Valor: R$ 159,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_1.webp"
            alt="Formação Brigada de Incêndios (Avançado) - Conforme NBR14276"
            width="410"
            height="230"
            
          />
          <h3>Formação Brigada de Incêndios (Avançado) - Conforme NBR14276</h3>
          <div className={styles.description}>
            <p>
            O curso de Formação de Brigada de Incêndios Avançado é indicado às indústrias que desejam preparar seus colaboradores para atuarem em suas brigadas internas e equipes de CIPA.O curso aborda conteúdos relevantes para sua equipe fazer a diferença preservando vidas.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/55.webp"
            alt="Formação Brigada de Incêndios (Avançado) (Reciclagem) - Conforme NBR14276"
            width="410"
            height="230"
            
          />
          <h3>Formação Brigada de Incêndios (Avançado) (Reciclagem) - Conforme NBR14276</h3>
          <div className={styles.description}>
            <p>
            O curso de Formação de Brigada de Incêndios Avançado Reciclagem é indicado às indústrias que desejam preparar seus colaboradores para atuarem em suas brigadas internas e equipes de CIPA.O curso aborda conteúdos relevantes para sua equipe fazer a diferença preservando vidas.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/37.webp"
            alt="Formação Brigada de Incêndios (Básico) - Conforme NBR14276"
            width="410"
            height="230"
            
          />
          <h3>Formação Brigada de Incêndios (Básico) - Conforme NBR14276</h3>
          <div className={styles.description}>
            <p>
            O curso de Formação de Brigada de Incêndios Básico é indicado às indústrias que desejam preparar seus colaboradores para atuarem em suas brigadas internas e equipes de CIPA.O curso aborda conteúdos relevantes para sua equipe fazer a diferença preservando vidas.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/49.webp"
            alt="Formação Brigada de Incêndios (Básico) (Reciclagem) - Conforme NBR14276"
            width="410"
            height="230"
            
          />
          <h3>Formação Brigada de Incêndios (Básico) (Reciclagem) - Conforme NBR14276</h3>
          <div className={styles.description}>
            <p>
            O curso de Formação de Brigada de Incêndios é indicado às indústrias que desejam preparar seus colaboradores para atuarem em suas brigadas internas e equipes de CIPA.

            O curso aborda conteúdos relevantes para sua equipe fazer a diferença preservando vidas
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        {/* <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/"
            alt="Fios de PDO"
            width="350"
            height="279"
            left
          />
          <h3>Fios de PDO</h3>
          <div className={styles.description}>
            <p>São inseridos na derme com o intuito de estimular o colágeno.</p>
          </div>
        </div> */}

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/40.webp" 
          alt="Formação Brigada de Incêndios (Intermediário) - Conforme NBR14276" 
          width="410"
          height="230"
          />
          <h3>Formação Brigada de Incêndios (Intermediário) - Conforme NBR14276</h3>
          <div className={styles.description}>
            <p>
            O curso de Formação de Brigada de Incêndios é indicado às indústrias que desejam preparar seus colaboradores para atuarem em suas brigadas internas e equipes de CIPA.

            O curso aborda conteúdos relevantes para sua equipe fazer a diferença preservando vidas.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/43.webp" 
          alt="Formação Brigada de Incêndios (Intermediário) (Reciclagem) - Conforme NBR14276" 
          width="410"
          height="230"
          />
          <h3>Formação Brigada de Incêndios (Intermediário) (Reciclagem) - Conforme NBR14276</h3>
          <div className={styles.description}>
            <p>
            O curso de Formação de Brigada de Incêndios é indicado às indústrias que desejam preparar seus colaboradores para atuarem em suas brigadas internas e equipes de CIPA.

            O curso aborda conteúdos relevantes para sua equipe fazer a diferença preservando vidas.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/746.webp" 
          alt="Formação de Brigada de Incêndio (Avançado) (Reciclagem) - Conforme IT17 de SP" 
          width="410"
          height="230"
          />
          <h3>Formação de Brigada de Incêndio (Avançado) (Reciclagem) - Conforme IT17 de SP</h3>
          <div className={styles.description}>
            <p>
            O curso é indicado às indústrias, hotéis, comércios, varejos e empresas em geral que desejam preparar seus colaboradores para atuarem em suas brigadas internas e equipes de CIPA. O curso aborda conteúdos relevantes para sua equipe fazer a diferença preservando vidas e  resguardar patrimônio.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/745.webp" 
          alt="Formação de Brigada de Incêndio (Avançado) - Conforme IT17 de SP" 
          width="410"
          height="230"
          />
          <h3>Formação de Brigada de Incêndio (Avançado) - Conforme IT17 de SP</h3>
          <div className={styles.description}>
            <p>
            O curso é indicado às indústrias, hotéis, comércios, varejos e empresas em geral que desejam preparar seus colaboradores para atuarem em suas brigadas internas e equipes de CIPA. O curso aborda conteúdos relevantes para sua equipe fazer a diferença preservando vidas e  resguardar patrimônio.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/744.webp" 
          alt="Formação de Brigada de Incêndio (Básico) - Conforme IT17 de SP" 
          width="410"
          height="230"
          />
          <h3>Formação de Brigada de Incêndio (Básico) - Conforme IT17 de SP</h3>
          <div className={styles.description}>
            <p>
            O curso é indicado às indústrias, hotéis, comércios, varejos e empresas em geral que desejam preparar seus colaboradores para atuarem em suas brigadas internas e equipes de CIPA. O curso aborda conteúdos relevantes para sua equipe fazer a diferença preservando vidas e  resguardar patrimônio.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/c6xex1rq1fldp9dyxagg.webp" 
          alt="Formação de Brigada de Incêndio (Básico) (Reciclagem) - Conforme IT17 de SP" 
          width="410"
          height="230"
          />
          <h3>Formação de Brigada de Incêndio (Básico) (Reciclagem) - Conforme IT17 de SP</h3>
          <div className={styles.description}>
            <p>
            O curso é indicado às indústrias, hotéis, comércios, varejos e empresas em geral que desejam preparar seus colaboradores para atuarem em suas brigadas internas e equipes de CIPA. O curso aborda conteúdos relevantes para sua equipe fazer a diferença preservando vidas e  resguardar patrimônio.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/361.webp" 
          alt="Formação de Brigada de Incêndio (Intermediário) - Conforme IT17 de SP" 
          width="410"
          height="230"
          />
          <h3>Formação de Brigada de Incêndio (Intermediário) - Conforme IT17 de SP</h3>
          <div className={styles.description}>
            <p>
            O curso é indicado às indústrias, hotéis, comércios, varejos e empresas em geral que desejam preparar seus colaboradores para atuarem em suas brigadas internas e equipes de CIPA. O curso aborda conteúdos relevantes para sua equipe fazer a diferença preservando vidas e  resguardar patrimônio.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/46l87bzio88otz1xuzcs.webp" 
          alt="Formação de Brigada de Incêndio (Intermediário) (Reciclagem) - Conforme IT17 de SP" 
          width="410"
          height="230"
          />
          <h3>Formação de Brigada de Incêndio (Intermediário) (Reciclagem) - Conforme IT17 de SP</h3>
          <div className={styles.description}>
            <p>
            O curso é indicado às indústrias, hotéis, comércios, varejos e empresas em geral que desejam preparar seus colaboradores para atuarem em suas brigadas internas e equipes de CIPA. O curso aborda conteúdos relevantes para sua equipe fazer a diferença preservando vidas e  resguardar patrimônio.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/3mfc0gqhqrqxtosivugc.webp" 
          alt="Jogo de Percepção de Riscos" 
          width="410"
          height="230"
          />
          <h3>Jogo de Percepção de Riscos</h3>
          <div className={styles.description}>
          <p>Carga Horaria: 1h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/w0icckj3tdj94n66dicc.webp" 
          alt="Lei Geral de Proteção de Dados - LGPD" 
          width="410"
          height="230"
          />
          <h3>Lei Geral de Proteção de Dados - LGPD</h3>
          <div className={styles.description}>
            <p>
            Nesta capacitação o aluno aprenderá: 

            O conceito geral da LGPD e a importância de existir uma Lei para proteção de dados, para as pessoas e organizações; 
            O conceito de dados pessoais; 
            Definir agentes e papéis na LGPD; 
            Exercer boas práticas no tratamento e governança de dados pessoais; 
            Cumprir as exigências legais da LGPD. 
            </p>
            <p>Carga Horaria: 2h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/uf01aup566tkx3wklfisdl74.webp" 
          alt="LOTO - Guia Prático" 
          width="410"
          height="230"
          />
          <h3>LOTO - Guia Prático</h3>
          <div className={styles.description}>
            <p>
            Este treinamento tem como objetivo capacitar os colaboradores para identificar e utilizar dispositivos de bloqueio para energias perigosas garantindo a manutenção segura e eficiente de equipamentos.
            </p>
            <p>Carga Horaria: 10h</p><p>Valor: R$ 129,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/58.webp" 
          alt="Noções Básicas de Anatomia" 
          width="410"
          height="230"
          />
          <h3>Noções Básicas de Anatomia</h3>
          <div className={styles.description}>
            <p>
            Este curso tem como objetivos: identificar e localizar os órgãos no corpo humano; conhecer os sistemas corporais; reportar lesões utilizando linguagem correta.
            </p>
            <p>Carga Horaria: 1h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/64.webp" 
          alt="NR10 - Segurança Elétrica (Básico)" 
          width="410"
          height="230"
          />
          <h3>NR10 - Segurança Elétrica (Básico)</h3>
          <div className={styles.description}>
            <p>
            O treinamento NR-10 de Segurança Elétrica é obrigatório para pessoas que trabalhem em instalações elétricas e/ou realizem serviços que envolvam eletricidade.

            Desenvolvido em parceria com uma sólida empresa de engenharia elétrica e automação industrial - a GreyLogix, garantimos um material completo e atualizado, além de tutores altamente qualificados e com experiência prática. Uma solução inovadora para certificação profissional com uma metodologia que facilita e potencializa o processo de aprendizagem, gerando economia de tempo e dinheiro.
            </p>
            <p>Carga Horaria: 1h</p><p>Valor: R$ 209,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/blob.webp" 
          alt="NR1 - Disposições Gerais" 
          width="410"
          height="230"
          />
          <h3>NR1 - Disposições Gerais</h3>
          <div className={styles.description}>
            <p>
            O curso aborda os aspectos gerais da NR1. Ao final deste treinamento você deverá ser capaz de identificar onde as NRs se aplicam e quem são os responsáveis pelo seu cumprimento.
            </p>
            <p>Carga Horaria: 1h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/67.webp" 
          alt="NR10 - Segurança Elétrica (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR10 - Segurança Elétrica (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            O treinamento NR-10 de Segurança Elétrica é obrigatório para pessoas que trabalhem em instalações elétricas e/ou realizem serviços que envolvam eletricidade.

            Desenvolvido em parceria com uma sólida empresa de engenharia elétrica e automação industrial - a GreyLogix, garantimos um material completo e atualizado, além de tutores altamente qualificados e com experiência prática. Uma solução inovadora para certificação profissional com uma metodologia que facilita e potencializa o processo de aprendizagem, gerando economia de tempo e dinheiro.
                        </p>
            <p>Carga Horaria: 20h</p><p>Valor: R$ 189,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/172.webp" 
          alt="NR10 - SEP (Sistema Elétrico de Potência)" 
          width="410"
          height="230"
          />
          <h3>NR10 - SEP (Sistema Elétrico de Potência)</h3>
          <div className={styles.description}>
            <p>
            Desenvolvido em parceria com uma sólida empresa de engenharia elétrica e automação industrial - a GreyLogix, garantimos um material completo e atualizado, além de tutores altamente qualificados e com experiência prática. Uma solução inovadora para certificação profissional com uma metodologia que facilita e potencializa o processo de aprendizagem, gerando economia de tempo e dinheiro.
            </p>
            <p>Carga Horaria: 20h</p><p>Valor: R$ 199,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/70.webp" 
          alt="NR10 - SEP - Reciclagem (Sistema Elétrico de Potência)" 
          width="410"
          height="230"
          />
          <h3>NR10 - SEP - Reciclagem (Sistema Elétrico de Potência)</h3>
          <div className={styles.description}>
            <p>
            Desenvolvido em parceria com uma sólida empresa de engenharia elétrica e automação industrial - a GreyLogix, garantimos um material completo e atualizado, além de tutores altamente qualificados e com experiência prática. Uma solução inovadora para certificação profissional com uma metodologia que facilita e potencializa o processo de aprendizagem, gerando economia de tempo e dinheiro.
            </p>
            <p>Carga Horaria: 40h</p><p>Valor: R$ 219,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/jrq0ejzt8dh57huf0cgk.webp" 
          alt="NR11 - Transporte Movimentação Armazenagem e Manuseio de Materiais" 
          width="410"
          height="230"
          />
          <h3>NR11 - Transporte Movimentação Armazenagem e Manuseio de Materiais</h3>
          <div className={styles.description}>
            <p>
            Este treinamento tem como finalidade apresentar conceitos básicos de segurança nos processos envolvendo levantamento, transporte e descargas de forma manual ou com uso de máquinas/equipamentos e conscientizar os trabalhadores sobre os riscos existentes na operação, assim como a importância e necessidade de atender às normas técnicas de segurança.
 
            </p>
            <p>Carga Horaria: 8h</p><p>Valor: R$ 119,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/zxfp3r9jg3dg33qifp9t.webp" 
          alt="NR11 - Transporte Movimentação Armazenagem e Manuseio de Materiais (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR11 - Transporte Movimentação Armazenagem e Manuseio de Materiais (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            Este treinamento tem como finalidade apresentar conceitos básicos de segurança nos processos envolvendo levantamento, transporte e descargas de forma manual ou com uso de máquinas/equipamentos e conscientizar os trabalhadores sobre os riscos existentes na operação, assim como a importância e necessidade de atender às normas técnicas de segurança.
            </p>
            <p>Carga Horaria: 4h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/76.webp" 
          alt="NR12 - Segurança no Trabalho em Máquinas e Equipamentos (Geral)" 
          width="410"
          height="230"
          />
          <h3>NR12 - Segurança no Trabalho em Máquinas e Equipamentos (Geral)</h3>
          <div className={styles.description}>
            <p>
            Este treinamento tem como finalidade apresentar conceitos básicos de segurança de máquinas e conscientizar os trabalhadores sobre os riscos existentes na operação e manuseio dos equipamentos, assim como a importância e necessidade de atender às normas técnicas de segurança.
            </p>
            <p>Carga Horaria: 8h</p><p>Valor: R$ 119,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/79.webp" 
          alt="NR12 - Segurança no Trabalho em Máquinas e Equipamentos (Geral) (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR12 - Segurança no Trabalho em Máquinas e Equipamentos (Geral) (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            Este treinamento tem como finalidade apresentar conceitos básicos de segurança de máquinas e conscientizar os trabalhadores sobre os riscos existentes na operação e manuseio dos equipamentos, assim como a importância e necessidade de atender às normas técnicas de segurança.
            </p>
            <p>Carga Horaria: 8h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/8mcch5btmuzevzpn7kk3so1t.webp" 
          alt="NR13 - Treinamento de Segurança na Operação de Caldeiras" 
          width="410"
          height="230"
          />
          <h3>NR13 - Treinamento de Segurança na Operação de Caldeiras</h3>
          <div className={styles.description}>
            <p>
            Este treinamento tem como objetivo capacitar e aperfeiçoar o profissional que atua na operação e controle de caldeiras, de acordo com a norma regulamentadora NR-13, visando práticas seguras de operação
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/88.webp" 
          alt="NR13 - Treinamento de Segurança na Operação de Caldeiras (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR13 - Treinamento de Segurança na Operação de Caldeiras (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            Este treinamento tem como objetivo capacitar e aperfeiçoar o profissional que atua na operação e controle de caldeiras, de acordo com a norma regulamentadora NR-13, visando práticas seguras de operação.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/4c2d1729m2u7pwzms86bo9m5.webp" 
          alt="NR13 - Treinamento de Segurança na Operação de Unidades de Processo (Vasos de Pressão)" 
          width="410"
          height="230"
          />
          <h3>NR13 - Treinamento de Segurança na Operação de Unidades de Processo (Vasos de Pressão)</h3>
          <div className={styles.description}>
            <p>
            Este treinamento tem como objetivo capacitar os profissionais que irão operar as unidades de processo, que possuam vasos de pressão de categorias I ou II, visando desta forma a segurança e a saúde dos trabalhadores.
            Lembrando que os vasos de pressão só podem ser operados por profissionais que possuem Treinamento de Segurança na Operação de Unidades de Processo (Vasos de Pressão)
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/91.webp" 
          alt="NR13 - Treinamento de Segurança na Operação de Unidades de Processo (Vasos de Pressão) (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR13 - Treinamento de Segurança na Operação de Unidades de Processo (Vasos de Pressão) (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            Este treinamento tem como objetivo capacitar os profissionais que irão operar as unidades de processo, que possuam vasos de pressão de categorias I ou II, visando desta forma a segurança e a saúde dos trabalhadores.
            Lembrando que os vasos de pressão só podem ser operados por profissionais que possuem Treinamento de Segurança na Operação de Unidades de Processos.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/lmhw81i28iiy3qrkk8bc.webp" 
          alt="NR17 - Ergonomia" 
          width="410"
          height="230"
          />
          <h3>NR17 - Ergonomia</h3>
          <div className={styles.description}>
            <p>
            Ao final deste treinamento você será capaz de:

            Explicar o que é Ergonomia e suas áreas de aplicação;
            Verificar se um posto de trabalho oferece condições ergonômicas adequadas;
            Ajustar mobiliários, equipamentos e ferramentas para preservar sua saúde;
            Promover discussões sobre o tema: Ergonomia.
                        </p>
            <p>Carga Horaria: 2h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/ghkcc1or520d5d37i8y3.webp" 
          alt="NR17 - Ergonomia para Operadores de Checkout" 
          width="410"
          height="230"
          />
          <h3>NR17 - Ergonomia para Operadores de Checkout</h3>
          <div className={styles.description}>
            <p>
            Ao final deste treinamento você será capaz de:

            Explicar o que é Ergonomia e suas áreas de aplicação;
            Verificar se um posto de trabalho oferece condições ergonômicas adequadas;
            Ajustar mobiliários, equipamentos e ferramentas para preservar sua saúde;
            Promover discussões sobre o tema: Ergonomia.
            </p>
            <p>Carga Horaria: 2h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/0dcxxnpan2bylox6e4gv.webp" 
          alt="NR17 - Levantamento e Transporte Manual de Cargas" 
          width="410"
          height="230"
          />
          <h3>NR17 - Levantamento e Transporte Manual de Cargas</h3>
          <div className={styles.description}>
            <p>
            Após este treinamento o aluno estará apto a:

            Explicar o que é Ergonomia;

            Definir as condições ideais para levantamento e transporte manual de carga;

            Identificar limites para o levantamento e transporte manual de carga;

            Promover discussões sobre o tema: Ergonomia.
                        </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/211.webp" 
          alt="NR17 - Teleatendimento" 
          width="410"
          height="230"
          />
          <h3>NR17 - Teleatendimento</h3>
          <div className={styles.description}>
            <p>
            Após este treinamento o aluno estará apto a:

            Verificar se um posto de trabalho oferece condições ergonômicas adequadas ao teleatendimento;
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/1xw12gxzpef1dkn6jd1v36dc.webp" 
          alt="NR18 - Segurança e Saúde No Trabalho Na Indústria Da Construção (Básico em Segurança do Trabalho)" 
          width="410"
          height="230"
          />
          <h3>NR18 - Segurança e Saúde No Trabalho Na Indústria Da Construção (Básico em Segurança do Trabalho)</h3>
          <div className={styles.description}>
            <p>
            Unidade 1:

            Para a capacitação básica em segurança do trabalho: I. as condições e meio ambiente de trabalho; II. os riscos inerentes às atividades desenvolvidas; III. os equipamentos e proteção coletiva existentes no canteiro de obras; IV. o uso adequado dos equipamentos de proteção individual; V. o PGR do canteiro de obras.
            </p>
            <p>Carga Horaria: 4h</p><p>Valor: R$ 129,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/bdwjp05jthjq7h7if4qz.webp" 
          alt="NR20 Avançado I" 
          width="410"
          height="230"
          />
          <h3>NR20 Avançado I</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolendo inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente os processos rotineiros de forma segura e responsável.

            O curso pode ser realizado no formato EAD, Semipresencial ou à Distância. Dispõe de uma unidade de ensino totalmente interativa, desenvolvida em computação gráfica e com conteúdo acessível para todos os níveis profissionais. Possui exercícios, fórum e prova de suficiência para emissão de certificado. O aluno conta com apoio e orientação de um tutor-especialista durante todo o curso.
            </p>
            <p>Carga Horaria: 20h</p><p>Valor: R$ 239,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/u5qss91cty3vl3d9dx2b.webp" 
          alt="NR20 Avançado I (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR20 Avançado I (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolendo inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 4h</p><p>Valor: R$ 169,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/wr11fcqpxv7snvipkx5ntvfk.webp" 
          alt="NR20 - Segurança na Exposição Ocupacional ao Benzeno" 
          width="410"
          height="230"
          />
          <h3>NR20 - Segurança na Exposição Ocupacional ao Benzeno</h3>
          <div className={styles.description}>
            <p>
            O objetivo do treinamento é instruir sobre a norma NR-20, que protege em questões que envolvem riscos da exposição ocupacional ao benzeno em postos revendedores de combustíveis.

 
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/fp6zonvvktcu16184fw7.webp" 
          alt="NR20 Avançado II" 
          width="410"
          height="230"
          />
          <h3>NR20 Avançado II</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolendo inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 32h</p><p>Valor: R$ 249,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/vq12p1o4vxwkxytwyr29.webp" 
          alt="NR20 Avançado II (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR20 Avançado II (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolendo inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 4h</p><p>Valor: R$ 179,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/5lfeyyglfjwhoyghmkbm1.webp" 
          alt="NR20 Básico (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR20 Básico (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolvendo inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 4h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/j4kz1vin8r20b2c42gz2.webp" 
          alt="NR20 Básico Classe I" 
          width="410"
          height="230"
          />
          <h3>NR20 Básico Classe I</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolvendo inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 4h</p><p>Valor: R$ 129,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/vphfjhu60ltra2ethqjp.webp" 
          alt="NR20 Básico Classe II" 
          width="410"
          height="230"
          />
          <h3>NR20 Básico Classe II</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolvendo
            inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente
            os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 6h</p><p>Valor: R$ 129,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/exk96i1kklxok1mop085.webp" 
          alt="NR20 Básico Classe III" 
          width="410"
          height="230"
          />
          <h3>NR20 Básico Classe III</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolvendo
            inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente
            os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 8h</p><p>Valor: R$ 129,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/bhctob0tf77oka193hav.webp" 
          alt="NR20 Inflamáveis e Combustíveis Nível Específico Classe II" 
          width="410"
          height="230"
          />
          <h3>NR20 Inflamáveis e Combustíveis Nível Específico Classe II</h3>
          <div className={styles.description}>
            <p>
            O Curso da NR20 Inflamáveis e Combustíveis Nível Específico Classe II, visa capacitar os trabalhadores da área de saúde e segurança que atuam nas instalações classe II.

            O aluno terá conhecimento sobre a norma, conhecerá metodologias de análise de risco, permissão de trabalho e receberá orientação dos procedimentos a serem seguidos em situações de emergência relacionadas à inflamáveis e combustíveis.
            </p>
            <p>Carga Horaria: 4h</p><p>Valor: R$ 149,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/g7mkkcplljqboihjcyyg.webp" 
          alt="NR20 Inflamáveis e Combustíveis Nível Específico Classe III" 
          width="410"
          height="230"
          />
          <h3>NR20 Inflamáveis e Combustíveis Nível Específico Classe III</h3>
          <div className={styles.description}>
            <p>
            O aluno terá conhecimento sobre a norma, conhecerá metodologias de análise de risco, permissão de trabalho e receberá orientação dos procedimentos a serem seguidos em emergências relacionadas à inflamáveis e combustíveis.
            </p>
            <p>Carga Horaria: 16h</p><p>Valor: R$ 189,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/115.webp" 
          alt="NR20 Iniciação sobre Inflamáveis e Combustíveis" 
          width="410"
          height="230"
          />
          <h3>NR20 Iniciação sobre Inflamáveis e Combustíveis</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolendo inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 4h</p><p>Valor: R$ 129,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/118.webp" 
          alt="NR20 Iniciação sobre Inflamáveis e Combustíveis (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR20 Iniciação sobre Inflamáveis e Combustíveis (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolendo inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/sqvzvmsd26oso7bv6jrq.webp" 
          alt="NR20 Intermediário (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR20 Intermediário (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolendo inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 4h</p><p>Valor: R$ 149,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/lnch7nznwse0totwgzpp.webp" 
          alt="NR20 Intermediário Classe I" 
          width="410"
          height="230"
          />
          <h3>NR20 Intermediário Classe I</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolvendo inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 12h</p><p>Valor: R$ 219,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/l7lslhjn00ou214ufjbm.webp" 
          alt="NR20 Intermediário Classe II" 
          width="410"
          height="230"
          />
          <h3>NR20 Intermediário Classe II</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolvendo inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 14h</p><p>Valor: R$ 219,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/z8fnyg6e1mkyehnqic86.webp" 
          alt="NR20 Intermediário Classe III" 
          width="410"
          height="230"
          />
          <h3>NR20 Intermediário Classe III</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°20 os processos envolvendo inflamáveis e combustíveis. Ao final deste treinamento você deverá ser capaz de executar corretamente os processos rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 16h</p><p>Valor: R$ 219,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/wczwmf6qj20qdk6n8hn96p7d.webp" 
          alt="NR22 - CIPAMIN - Comissão Interna de Prevenção de Acidentes de Trabalho na Mineração" 
          width="410"
          height="230"
          />
          <h3>NR22 - CIPAMIN - Comissão Interna de Prevenção de Acidentes de Trabalho na Mineração</h3>
          <div className={styles.description}>
            <p>
            Capacitar os profissionais de diferentes especialidades para realizarem atividades de trabalho em áreas de mineração, conscientizando-os sobre os riscos inerentes a estes locais para que respeitem as boas práticas relacionadas a saúde e segurança dos trabalhadores.
            </p>
            <p>Carga Horaria: 24h</p><p>Valor: R$ 189,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/5bkuvt7w3top5lemje6y2d6x.webp" 
          alt="NR26 - Sinalização de Segurança" 
          width="410"
          height="230"
          />
          <h3>NR26 - Sinalização de Segurança</h3>
          <div className={styles.description}>
            <p>
            O objetivo geral deste curso é reconhecer o conteúdo teórico da Norma Regulamentadora 26, que aborda a Rotulagem de Produtos Químicos e as Sinalizações de Segurança, e compreender como aplicar tais conhecimentos em seu ambiente profissional, de maneira a identificar situações de risco e perigo, prevenir acidentes e saber agir em situações de emergência.
            </p>
            <p>Carga Horaria: 4h</p><p>Valor: R$ 129,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/0k7dm4e7vocloly07l6v867g.webp" 
          alt="NR32 - Segurança e Saúde no Trabalho em Serviços de Saúde" 
          width="410"
          height="230"
          />
          <h3>NR32 - Segurança e Saúde no Trabalho em Serviços de Saúde</h3>
          <div className={styles.description}>
            <p>
            Capacitar e orientar empresários e profissionais que atuam na área de saúde sobre os riscos aos quais são expostos na realização das suas tarefas, para que possam trabalhar em segurança e adotar medidas de prevenção reduzindo o risco de acidentes e adoecimento aos profissionais que atuam na área da saúde.
            </p>
            <p>Carga Horaria: 8h</p><p>Valor: R$ 129,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/5z1u6hr25wtlyvfubxhp.webp" 
          alt="NR31 - CIPA Trabalho Rural" 
          width="410"
          height="230"
          />
          <h3>NR31 - CIPA Trabalho Rural</h3>
          <div className={styles.description}>
            <p>
            O curso CIPATR aborda os requisitos de treinamentos previstos na norma regulamentadora NR5 e NR31, provendo conhecimentos pertinentes a atuação da comissão e sua organização; além de abordar boas práticas para a prevenção de acidentes; recomendações para desenvolver e manter ambientes saudáveis e seguros; boas práticas de saúde ocupacional e medidas para atuar em casos emergências.
            </p>
            <p>Carga Horaria: 20h</p><p>Valor: R$ 169,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/upptf1u2zybj1jh5hbm0.webp" 
          alt="NR33 Supervisor" 
          width="410"
          height="230"
          />
          <h3>NR33 Supervisor</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°33, assim como capacitar os profissionais da área a prevenção de acidentes, procedimentos e medidas de proteção em espaços confinados, de acordo com a NBR 14787, que estabelece os requisitos mínimos para proteção dos trabalhadores e do local de trabalho, bem como os riscos de entrada em espaços confinados.
            </p>
            <p>Carga Horaria: 40h</p><p>Valor: R$ 229,00</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/vieyqvs5e07jzm5h5djp.webp" 
          alt="NR33 Supervisor (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR33 Supervisor (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°33, assim como capacitar os profissionais da área a prevenção de acidentes, procedimentos e medidas de proteção em espaços confinados, de acordo com a NBR 14787, que estabelece os requisitos mínimos para proteção dos trabalhadores e do local de trabalho, bem como os riscos de entrada em espaços confinados.
            </p>
            <p>Carga Horaria: 8h</p><p>Valor: R$ 159,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/3is1iwr0d4e1jrj4m109.webp" 
          alt="NR33 Trabalhador e Vigia" 
          width="410"
          height="230"
          />
          <h3>NR33 Trabalhador e Vigia</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°33, assim como os processos e trabalhos envolvendo espaços confinados. Ao final deste treinamento você deverá ser capaz de executar corretamente as atividades rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 16h</p><p>Valor: R$ 189,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/v0qzxbqokwtr6rinw97q.webp" 
          alt="NR33 Trabalhador e Vigia (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR33 Trabalhador e Vigia (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°33, assim como os processos e trabalhos envolvendo espaços confinados. Ao final deste treinamento você deverá ser capaz de executar corretamente as atividades rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 8h</p><p>Valor: R$ 119,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/qrl3tkitcpg2zrrdq63zbb3v.webp" 
          alt="NR34 - Trabalho a Quente" 
          width="410"
          height="230"
          />
          <h3>NR34 - Trabalho a Quente</h3>
          <div className={styles.description}>
            <p>
            Capacitar os trabalhadores no curso básico de segurança para trabalhos a quente para o cumprimento da Norma Regulamentadora nº 34
            </p>
            <p>Carga Horaria: 8h</p><p>Valor: R$ 169,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/6qjiv620k570lt6jrsnv.webp" 
          alt="NR35 - Trabalho em Altura" 
          width="410"
          height="230"
          />
          <h3>NR35 - Trabalho em Altura - Trabalhador</h3>
          <div className={styles.description}>
            <p>
            Um curso que aborda as principais especificações relacionadas ao trabalho em altura. Está em conformidade a Norma Regulamentadora – NR 35 e possui certificado válido em todo Brasil – portaria 008/02 da Secretaria de Estado da Educação e do Desporto de Santa Catarina. Neste curso, o aluno será capacitado para atuar com segurança no trabalho em altura correspondente à sua função.
            </p>
            <p>Carga Horaria: 24h</p><p>Valor: R$189,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/chi68cz32m8fwcakwlmk.webp" 
          alt="NR35 - Trabalho em Altura - Trabalhador (Reciclagem)" 
          width="410"
          height="230"
          />
          <h3>NR35 - Trabalho em Altura - Trabalhador (Reciclagem)</h3>
          <div className={styles.description}>
            <p>
            Um curso que aborda as principais especificações relacionadas ao trabalho em altura. Está em conformidade a Norma Regulamentadora – NR 35 e possui certificado válido em todo Brasil – portaria 008/02 da Secretaria de Estado da Educação e do Desporto de Santa Catarina. Neste curso, o aluno será capacitado para atuar com segurança no trabalho em altura correspondente à sua função.
            </p>
            <p>Carga Horaria: 8h</p><p>Valor: R$ 119,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/497.webp" 
          alt="NR5 - CIPA - GRAU DE RISCO 1" 
          width="410"
          height="230"
          />
          <h3>NR5 - CIPA - GRAU DE RISCO 1</h3>
          <div className={styles.description}>
            <p>
            O curso CIPA aborda os requisitos de treinamentos previstos na norma regulamentadora NR-5, provendo conhecimentos pertinentes a atuação da comissão e sua organização; além de abordar boas práticas para a prevenção de acidentes; recomendações para desenvolver e manter ambientes saudáveis e seguros; boas práticas de saúde ocupacional e medidas para atuar em casos emergências.
            </p>
            <p>Carga Horaria: 8h</p><p>Valor: R$ 139,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/bxnhk31exomplhqa8l1m.webp" 
          alt="NR5 - CIPA - GRAU DE RISCO 1 - Representante Nomeado - EAD" 
          width="410"
          height="230"
          />
          <h3>NR5 - CIPA - GRAU DE RISCO 1 - Representante Nomeado - EAD</h3>
          <div className={styles.description}>
            <p>
            O curso CIPA aborda os requisitos de treinamentos previstos na norma regulamentadora NR-5, provendo conhecimentos pertinentes a atuação da comissão e sua organização; além de abordar boas práticas para a prevenção de acidentes; recomendações para desenvolver e manter ambientes saudáveis e seguros; boas práticas de saúde ocupacional e medidas para atuar em casos emergências.
            </p>
            <p>Carga Horaria: 8h</p><p>Valor: R$ 139,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/503.webp" 
          alt="NR5 - CIPA - GRAU DE RISCO 2" 
          width="410"
          height="230"
          />
          <h3>NR5 - CIPA - GRAU DE RISCO 2</h3>
          <div className={styles.description}>
            <p>
            O curso CIPA aborda os requisitos de treinamentos previstos na norma regulamentadora NR-5, provendo conhecimentos pertinentes a atuação da comissão e sua organização; além de abordar boas práticas para a prevenção de acidentes; recomendações para desenvolver e manter ambientes saudáveis e seguros; boas práticas de saúde ocupacional e medidas para atuar em casos emergências.
            </p>
            <p>Carga Horaria: 12h</p><p>Valor: R$ 149,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/ulu1mpt9cytagt4xcr3a.webp" 
          alt="NR5 - CIPA - GRAU DE RISCO 2 - Representante Nomeado - EAD" 
          width="410"
          height="230"
          />
          <h3>NR5 - CIPA - GRAU DE RISCO 2 - Representante Nomeado - EAD</h3>
          <div className={styles.description}>
            <p>
            O curso CIPA aborda os requisitos de treinamentos previstos na norma regulamentadora NR-5, provendo conhecimentos pertinentes a atuação da comissão e sua organização; além de abordar boas práticas para a prevenção de acidentes; recomendações para desenvolver e manter ambientes saudáveis e seguros; boas práticas de saúde ocupacional e medidas para atuar em casos emergências.
            </p>
            <p>Carga Horaria: 12h</p><p>Valor: R$ 149,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/509.webp" 
          alt="NR5 - CIPA - GRAU DE RISCO 3" 
          width="410"
          height="230"
          />
          <h3>NR5 - CIPA - GRAU DE RISCO 3</h3>
          <div className={styles.description}>
            <p>
            O curso CIPA aborda os requisitos de treinamentos previstos na norma regulamentadora NR-5, provendo conhecimentos pertinentes a atuação da comissão e sua organização; além de abordar boas práticas para a prevenção de acidentes; recomendações para desenvolver e manter ambientes saudáveis e seguros; boas práticas de saúde ocupacional e medidas para atuar em casos emergências.

 
            </p>
            <p>Carga Horaria: 16h</p><p>Valor: R$ 159,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/16xeik9u3s4hyeb4oc0e.webp" 
          alt="NR5 - CIPA - GRAU DE RISCO 3 - Representante Nomeado - EAD" 
          width="410"
          height="230"
          />
          <h3>NR5 - CIPA - GRAU DE RISCO 3 - Representante Nomeado - EAD</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°33, assim como os processos e trabalhos envolvendo espaços confinados. Ao final deste treinamento você deverá ser capaz de executar corretamente as atividades rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 16h</p><p>Valor: R$ 159,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/509.webp" 
          alt="NR5 - CIPA - GRAU DE RISCO 4" 
          width="410"
          height="230"
          />
          <h3>NR5 - CIPA - GRAU DE RISCO 4</h3>
          <div className={styles.description}>
            <p>
            O curso CIPA aborda os requisitos de treinamentos previstos na norma regulamentadora NR-5, provendo conhecimentos pertinentes a atuação da comissão e sua organização; além de abordar boas práticas para a prevenção de acidentes; recomendações para desenvolver e manter ambientes saudáveis e seguros; boas práticas de saúde ocupacional e medidas para atuar em casos emergências.
            </p>
            <p>Carga Horaria: 20h</p><p>Valor: R$ 169,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/509.webp" 
          alt="NR5 - CIPA - GRAU DE RISCO 4 - Representante Nomeado - EAD" 
          width="410"
          height="230"
          />
          <h3>NR5 - CIPA - GRAU DE RISCO 4 - Representante Nomeado - EAD</h3>
          <div className={styles.description}>
            <p>
            O curso CIPA aborda os requisitos de treinamentos previstos na norma regulamentadora NR-5, provendo conhecimentos pertinentes a atuação da comissão e sua organização; além de abordar boas práticas para a prevenção de acidentes; recomendações para desenvolver e manter ambientes saudáveis e seguros; boas práticas de saúde ocupacional e medidas para atuar em casos emergências.
            </p>
            <p>Carga Horaria: 20h</p><p>Valor: R$ 169,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/t1qb2z2gp6kquvrfd7hy.webp" 
          alt="NR6 - EPIs e EPCs (Equipamentos de Proteção Individual e Coletiva)" 
          width="410"
          height="230"
          />
          <h3>NR6 - EPIs e EPCs (Equipamentos de Proteção Individual e Coletiva)</h3>
          <div className={styles.description}>
            <p>
            É um curso sobre o uso dos Equipamentos de Proteção Individual (EPIs) em conformidade com a Norma Regulamentadora – NR 6. Certificado válido em todo Brasil – portaria 008/02 da Secretaria de Estado da Educação e do Desporto de Santa Catarina. Neste curso, o aluno será capacitado sobre a importância desses equipamentos e como utilizá-los.
            </p>
            <p>Carga Horaria: 2h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/fpnjm2j0mjarwvwjv0vk.webp" 
          alt="PPR - Programa de Proteção Respiratória" 
          width="410"
          height="230"
          />
          <h3>PPR - Programa de Proteção Respiratória</h3>
          <div className={styles.description}>
            <p>
            Garantir o uso correto e obter informações sobre a guarda, limpeza e higienização dos
            respiradores e que todo participante, durante o treinamento, tenha a oportunidade de manusear e
            repetir os mesmos procedimentos demonstrados pelo instrutor.
            </p>
            <p>Carga Horaria: 2h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/vht0ac8glbfyua8t39yk.webp" 
          alt="Prevenção e Combate à COVID-19" 
          width="410"
          height="230"
          />
          <h3>Prevenção e Combate à COVID-19</h3>
          <div className={styles.description}>
            <p>
            O curso de Prevenção e Combate à COVID-19 tem como objetivo prevenir os trabalhadores contra a contaminação da COVID-19 dentro do ambiente profissional e apresentar as informações necessárias caso seja necessário realizar o isolamento domiciliar.
            </p>
            <p>Carga Horaria: 2h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/tc1agralsfnbnfenknu0.webp" 
          alt="Prevenção e Proteção Contra Incêndios" 
          width="410"
          height="230"
          />
          <h3>Prevenção e Proteção Contra Incêndios</h3>
          <div className={styles.description}>
            <p>
            O treinamento de Prevenção e Proteção Contra Incêndios (PPCI) é parte do conteúdo de Formação de Brigada de Incêndio/Emergência. O treinamento tem como objetivo a instrução teórica à prevenção e proteção contra incêndios.
            </p>
            <p>Carga Horaria: 6h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/qiop7afmtq0vr59d4bo7m2xj.webp" 
          alt="Primeiros Socorros - Ênfase na Lei Lucas 13.722" 
          width="410"
          height="230"
          />
          <h3>Primeiros Socorros - Ênfase na Lei Lucas 13.722</h3>
          <div className={styles.description}>
            <p>
            Capacitar o colaborador para a realização de ações emergenciais em caso de acidentes envolvendo adultos, crianças ou lactentes, conforme LEI 13.722.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/xrxaoye5f3iuxb8c61xw.webp" 
          alt="Ressuscitação Cardiopulmonar - (RCP)" 
          width="410"
          height="230"
          />
          <h3>Ressuscitação Cardiopulmonar - (RCP)</h3>
          <div className={styles.description}>
            <p>
            Este treinamento, tem como objetivo capacitar o aluno para identificar e socorrer vítimas de obstrução da via respiratória, casos de parada respiratória e foma de realizar a ressuscitação pulmonar.
            </p>
            <p>Carga Horaria: 3h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/tsmwr8vtdf1jm6oqcskk58xm.webp" 
          alt="Simulador - Desafio dos EPIs - NR10" 
          width="410"
          height="230"
          />
          <h3>Simulador - Desafio dos EPIs - NR10</h3>
          <div className={styles.description}>
            <p>
            ***
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/qkez9u38wl6ctu8ct4jbj9uk.webp" 
          alt="Simulador - Preenchimento de APR" 
          width="410"
          height="230"
          />
          <h3>Simulador - Preenchimento de APR</h3>
          <div className={styles.description}>
            <p>
            ***
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/f7ogwc6661ben3qjszxlmzie.webp" 
          alt="Técnicas de Abandono de Área" 
          width="410"
          height="230"
          />
          <h3>Técnicas de Abandono de Área</h3>
          <div className={styles.description}>
            <p>
            ***
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/pct0omd9p3x9dbkrwj9a.webp" 
          alt="Treinamento de Valas e Escavações" 
          width="410"
          height="230"
          />
          <h3>Treinamento de Valas e Escavações</h3>
          <div className={styles.description}>
            <p>
            Unidade 1: 

          Objetivos; 
          Princípio Básico de Segurança; 
          Prioridade na Implantação de Medidas; 
          Sistemas de Proteção; 
          Riscos em Escavações; 
          Riscos em Fundações Escavadas; 
          Riscos em Fundações Cravadas e Injetadas; 
          Riscos em Desmonte de Rochas com o Uso de Explosivos. 
            </p>
            <p>Carga Horaria: 2h</p><p>Valor: R$ 109,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/3is1iwr0d4e1jrj4m109.webp" 
          alt="NR33 Trabalhador e Vigia" 
          width="410"
          height="230"
          />
          <h3>NR33 Trabalhador e Vigia</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°33, assim como os processos e trabalhos envolvendo espaços confinados. Ao final deste treinamento você deverá ser capaz de executar corretamente as atividades rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: --h</p><p>Valor: R$ --</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/3is1iwr0d4e1jrj4m109.webp" 
          alt="NR33 Trabalhador e Vigia" 
          width="410"
          height="230"
          />
          <h3>NR33 Trabalhador e Vigia</h3>
          <div className={styles.description}>
            <p>
            O curso aborda as exigências legais contida na Norma Regulamentadora n°33, assim como os processos e trabalhos envolvendo espaços confinados. Ao final deste treinamento você deverá ser capaz de executar corretamente as atividades rotineiros de forma segura e responsável.
            </p>
            <p>Carga Horaria: 16h</p><p>Valor: R$ 189,90</p>
            <p>
            <center><button className={styles.learnMoreButton} onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=5514997605773&text&type=phone_number&app_absent=0"}>
          Clique e saiba mais
        </button></center> 
            </p>
          </div>
        </div>



      </main>

      <section className={styles.images}>
        <Title title="QualitySEG Cursos EAD" subtitle="Qualidade é Nosso Destaque" />

        <ul className={`${styles.imagesContainer} mainContainer`}>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/produto1.png"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/produto2.png"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/produto3.png"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/produto4.png"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/produto5.png"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/produto6.png"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
}
