import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="src/assets/background-image.jpg" />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src="src/assets/profile-image.jpeg" />

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
