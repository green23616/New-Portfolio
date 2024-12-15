import styles from './Card.module.scss';

function Card({ like }) {
  return (
    <div className={styles.card} key={like.id}>
      <div className={styles.container} key={like.id}>
        <img
          className={styles.container__cardImg}
          src={like.urls.small}
          alt={like.id}
        />
        <h3 className={styles.container__cardDesc}>{like.alt_description}</h3>
      </div>
    </div>
  );
}

export default Card;
