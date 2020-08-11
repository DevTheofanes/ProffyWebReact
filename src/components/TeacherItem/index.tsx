import React from "react";

import whatsappIcon from "../../assets/icons/whatsapp.svg";

import "./styles.css";
import api from "../../services/api";

export interface Teacher {
  id: string;
  avatar: string;
  bio: string;
  cost: string;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p id="description">{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{teacher.cost}</strong>
        </p>

        <a
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          <span>Entre em contato</span>
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
