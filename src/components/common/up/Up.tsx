import { useEffect, useRef, useState } from 'react';
// CSS
import styles from './Up.module.scss';
import throttle from 'lodash/throttle';

function Up() {
  const scrollY = useRef(0);
  const [isY, setIsY] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      scrollY.current = window.scrollY;
      if (scrollY.current > 500) {
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
    <div
      className={`${'material-symbols-outlined'} ${styles.up} ${
        isY ? styles.active : styles.inactive
      }`}
      onClick={handleClick}
    >
      arrow_upward
    </div>
  );
}

export default Up;
