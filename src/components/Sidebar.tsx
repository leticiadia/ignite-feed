import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="src/assets/background-image.jpg"
        alt="Uma imagem de um teclado de computador em preto e branco"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="src/assets/profile-image.jpeg"
          alt="
          Imagem de uma moça de cor branca, com um cabelo nos ombros e uma franja, 
          óculos no formato arredondado e na cor rosa clara. 
          Usando uma blusa preta, com desenho de um capacete de astronauta e um crachá por volta do pescoço, 
          com uma mochila nas costas."
        />

        <strong>Leticia Dias</strong>
        <span>Full Stack Develop</span>
      </div>

      <div className={styles.button}>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </div>
    </aside>
  );
}
