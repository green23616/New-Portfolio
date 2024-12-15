import { useSetRecoilState } from 'recoil';
import Photo from '../../../../types/CardType';
import styles from './Card.module.scss';
import { likeState } from '../../../../store/atoms/likeState';

interface CardProps {
  data: Photo;
  src: string;
  id: string;
  setIsOpen: (value: boolean) => void;
  setSelected: (value: Photo) => void;
}

function Card({ data, src, id, setIsOpen, setSelected }: CardProps) {
  const setLikePage = useSetRecoilState(likeState);

  const handleClick = () => {
    setIsOpen(true);
    setSelected(data);
    setLikePage(false);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={src} alt={id} />
    </div>
  );
}

export default Card;
