import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Thalitafs7.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thalita Feitosa</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-06-04 08:00:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Gabriel. Parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Apludir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
