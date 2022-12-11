import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src="src/assets/profile-image.jpeg" />

          <div className={styles.authorInfo}>
            <strong>Leticia Dias</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time title="12 de dezembro às 10:28h" dateTime="2022-08-12 10:28:09">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera! 😃🚀</p>

        <p>
          Acabei de subir mais um projeto no meu portifólio. É um projeto que
          fiz no Ignite.
        </p>

        <p>
          Você pode conferir entrando nesse link para visualizar o repositório:
          🔗 <a href="https://github.com/leticiadia/ignite-feed">Ignite Feed</a>
        </p>

        <p className={styles.tag}>
          <a href="#">#code</a>
          <a href="#">#ignite</a>
          <a href="#">#react</a>
          <a href="#">#javascript</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
