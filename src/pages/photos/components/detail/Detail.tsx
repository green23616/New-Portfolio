import { useEffect, useState } from 'react';
import styles from './Detail.module.scss';
import Photo from '../../../../types/CardType';

interface detailProps {
  setIsOpen: (value: boolean) => void;
  selected: Photo;
}

function Detail({ setIsOpen, selected }: detailProps) {
  const [likes, setLikes] = useState(false);

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem('likes') || '[]');
    const isLiked = likes.some((item: Photo) => item.id === selected.id);
    setLikes(isLiked);
  }, [selected]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [setIsOpen]);

  const handleClick = () => {
    const likes = JSON.parse(localStorage.getItem('likes') || '[]');
    const alreadyIn = likes.some((item: Photo) => item.id === selected.id);

    if (!alreadyIn) {
      const newLikes = [...likes, selected];
      localStorage.setItem('likes', JSON.stringify(newLikes));
      setLikes(true);
      console.log('added');
    } else {
      console.log('Item is already in LocalStorage');
    }
  };

  return (
    <div className={styles.detail}>
      <div className={styles.container}>
        <div className={styles.container__header}>
          <p
            className={`${'material-symbols-outlined'} ${
              styles.container__header__close
            }`}
            onClick={() => setIsOpen(false)}
          >
            Close
          </p>
          <div className={styles.container__header__profileBox}>
            <img
              src={selected.user.profile_image.small}
              alt="profile"
              className={styles.profileImg}
            />
            <p className={styles.profileName}>{selected.user.username}</p>
          </div>
          <div className={styles.container__header__menu}>
            {likes ? (
              <p
                className={`${'material-symbols-outlined'} ${
                  styles.container__header__close
                }`}
                onClick={handleClick}
                style={{ color: 'red' }}
              >
                favorite
              </p>
            ) : (
              <p
                className={`${'material-symbols-outlined'} ${
                  styles.container__header__close
                }`}
                onClick={handleClick}
              >
                favorite
              </p>
            )}
          </div>
        </div>
        <div className={styles.container__main}>
          <img
            className={styles.container__main__img}
            src={selected.urls.small}
            alt="img"
          />
          <div className={styles.container__main__desc}>
            <h2>{selected.alt_description}</h2>
            <h3>{selected.created_at.split('T')[0]}</h3>
            <h3>{selected.likes} Likes</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
