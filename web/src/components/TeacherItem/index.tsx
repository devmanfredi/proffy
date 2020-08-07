import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/45863981?s=460&u=220f59d6cb8b5cb17bb8934656ebe2e9d5183d3b&v=4"
          alt="Heuler Manfredi"
        />
        <div>
          <strong>Heuler Manfredi</strong>
          <span>Engenharia de Software</span>
        </div>
      </header>
      <p>
        Apaixonado por tecnologia e quer aplicá-la em benefício das pessoas, em especial livrá-las da 
        burocracia, aplicando seu tempo no que mais importa.
        <br /> <br />
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
