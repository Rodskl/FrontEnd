import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Resumo />
      <Experiencia />
      <Formacao />
      <Habilidades />
      <InformacoesAdicionais />
    </div>
  );
};

const Header = () => (
  <header className="header">
    <img
      src="https://i.pinimg.com/736x/14/ab/e5/14abe5411385367455b2be7578cc2562.jpg" // Substituir pela imagem real
      alt="Cláudio Miguel"
      className="foto-perfil"
    />
    <div className="cabecalho">
      <h1>Cláudio Miguel</h1>
      <p>linkedin.com/in/claudio-miguel</p>
      <p>(99) 99999-9999</p>
      <p>claudiomiguel@gmail.com</p>
    </div>
  </header>
);

const Resumo = () => (
  <section className="resumo">
    <h2>Resumo</h2>
    <hr></hr>
    <p>
    Administrador com experiência em estratégia de vendas, análise de mercado e gestão de equipes. Foco <br></br>
    em melhorar a produtividade da empresa, otimizando processos e alcançando resultados consistentes. <br></br>
    Capacidade de negociação e capacidade de adaptação às exigências do mercado.
    </p>
    
  </section>
);

const Experiencia = () => (
  <section className="experiencia">
    <h2>Experiência Profissional</h2>
    <hr></hr>
    <div>
      <h3>Gerente Geral</h3>
      <p>Mercado Sacolé - Março 1985 - Atual</p>
    </div>
    <div>
      <h3>Caixa de Supermercado</h3>
      <p>Mercado Sacolé - Janeiro 1975 - Março 1985</p>
    </div>
  </section>
);

const Formacao = () => (
  <section className="formacao">
    <h2>Formação Acadêmica</h2>
    <hr></hr>
    <p>Bacharelado em Administração - Universidade Federal do Juiz de Fora (1974 - 1978)</p>
  </section>
);

const Habilidades = () => (
  <section className="habilidades">
    <h2>Habilidades e Competências</h2>
    <hr></hr>
    <ul>
      <li>Gerenciamento de pessoas</li>
      <li>Pacote Office avançado</li>
      <li>Boa comunicação</li>
      <li>Liderança</li>
      <li>Proatividade</li>
      <li>Atendimento ao consumidor</li>
      <li>Gerenciamento de recursos</li>
    </ul>
  </section>
);

const InformacoesAdicionais = () => (
  <section className="informacao">
    <h2>Informações Adicionais</h2>
    <hr></hr>
    <p>
      Artigo publicado na Revista Brasileira de Administração.
    </p>
  </section>
);

export default App;
