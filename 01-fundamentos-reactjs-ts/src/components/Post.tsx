import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["Post muita bacana, hein"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function newCommentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(comment: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (elem) => elem !== comment
    );
    setComments(commentsWithoutDeletedOne);
  }

  function handleInvalidNewComment(event: InvalidEvent<HTMLTextAreaElement>) {
    console.log(event);
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13" dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((elem) => {
          if (elem.type === "paragraph") {
            return <p key={elem.content}>{elem.content}</p>;
          } else if (elem.type === "link") {
            return (
              <p key={elem.content}>
                <a href="">{elem.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixeu o seu feedback</strong>

        <textarea
          onChange={newCommentChanged}
          value={newCommentText}
          placeholder="Deixe um comentário"
          onInvalid={handleInvalidNewComment}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
