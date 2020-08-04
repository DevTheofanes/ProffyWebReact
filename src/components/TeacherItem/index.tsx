import React from "react";

import whatsappIcon from "../../assets/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://source.unsplash.com/collection/3465564/500x500"
          alt="Theofanes"
        />

        <div>
          <strong>Theofanes de Souza</strong>
          <span>História</span>
        </div>
      </header>

      <p id="description">
        Professor com aulas diferenciadas pelos jogos desenvolvidos em sala de
        aulas
        <br /> <br />
        Com Jogos como War, para os alunos conhecer a historia de cada país, em
        medida de segurança leve sempre um capacete, finalista ganha 10 em media
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$120,00</strong>
        </p>

        <button type="submit">
          <img src={whatsappIcon} alt="Whatsapp" />
          <span>Entre em contato</span>
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
