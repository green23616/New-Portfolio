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
  like: Photo;
}

function Card({ like }: CardProps) {
  const setIsOpen = useSetRecoilState(detailState);
  const setSelected = useSetRecoilState(selectedState);

  const handleClick = () => {
    setIsOpen(true);
    setSelected(like);
  };

  return (
    <div className={styles.card} key={like.id} onClick={handleClick}>
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
