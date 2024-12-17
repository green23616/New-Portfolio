// CSS
import styles from './Card.module.scss';
// Type
import Photo from '../../../../../types/CardType';
// Recoil
import { useSetRecoilState } from 'recoil';
import {
  detailState,
  selectedState,
} from '../../../../../store/atoms/detailState';

interface CardProps {
  data: Photo;
}

function Card({ data }: CardProps) {
  const setIsOpen = useSetRecoilState(detailState);
  const setSelected = useSetRecoilState(selectedState);

  const handleClick = () => {
    setIsOpen(true);
    setSelected(data);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={data.urls.small} alt={data.id} />
    </div>
  );
}

export default Card;
