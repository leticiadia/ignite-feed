import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="src/assets/profile-image.jpeg"
        alt="
          Imagem de uma moça de cor branca, com um cabelo nos ombros e uma franja, 
          óculos no formato arredondado e na cor rosa clara. 
          Usando uma blusa preta, com desenho de um capacete de astronauta e um crachá por volta do pescoço, 
          com uma mochila nas costas."
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leticia Dias</strong>

              <time
                title="08 de dezembro às 08:13h"
                dateTime="2022-12-08 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Leticia, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
