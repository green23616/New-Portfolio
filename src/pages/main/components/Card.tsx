import styles from './Card.module.scss';

function Card({ title }) {
  return <div className={styles.card}>{title}</div>;
}

export default Card;
