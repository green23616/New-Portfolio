import { useNavigate } from 'react-router';
// CSS
import styles from './Card.module.scss';

interface CardProps {
  title: string;
  page: string;
}
function Card({ title, page }: CardProps) {
  const navigate = useNavigate();

  const handleClick = (page: string) => {
    navigate(`${page}`);
  };

  return (
    <div className={styles.card} onClick={() => handleClick(page)}>
      {title}
    </div>
  );
}

export default Card;
