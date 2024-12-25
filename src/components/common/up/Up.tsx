import { useEffect, useState } from 'react';
// CSS
import styles from './Up.module.scss';
// lodash
import throttle from 'lodash/throttle';

function Up() {
  const [isY, setIsY] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 500) {
        setIsY(true);
      } else {
        setIsY(false);
      }
    }, 300);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${'material-symbols-outlined'} ${styles.up} ${
        isY ? styles.active : styles.inactive
      }`}
      onClick={handleClick}
    >
      arrow_upward
    </button>
  );
}

export default Up;
