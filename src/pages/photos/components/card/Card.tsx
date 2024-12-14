import Photo from '../../../../types/CardType';
import styles from './Card.module.scss';

interface CardProps {
  data: Photo;
  src: string;
  id: string;
  setIsOpen: (value: boolean) => void;
  setSelected: (value: Photo) => void;
}

function Card({ data, src, id, setIsOpen, setSelected }: CardProps) {
  const handleClick = () => {
    setIsOpen(true);
    setSelected(data);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={src} alt={id} />
    </div>
  );
}

export default Card;
