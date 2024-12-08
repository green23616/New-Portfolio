import styles from './Card.module.scss';

interface CardProps {
  src: string;
  id: string;
  setIsOpen: (value: boolean) => void;
}

function Card({ src, id, setIsOpen }: CardProps) {
  return (
    <div className={styles.card} onClick={() => setIsOpen(true)}>
      <img src={src} alt={id} />
    </div>
  );
}

export default Card;
