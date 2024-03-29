import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export interface PostProps {
  author: string;
  content: string;
  publishedAt: Date;
}

export function Post({ author, publishedAt, content }) {
  const publishedDateFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publisheddateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publisheddateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if(line.type === 'link') {
            return <p className={styles.tag}><a href="#">{line.content}</a></p>
          }
        })}
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
