import { useEffect, useState } from 'react';
// CSS
import styles from './Detail.module.scss';
// Types
// Component
// Recoil
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { storageState } from '../../../../../store/atoms/storageState';
import {
  detailState,
  selectedState,
} from '../../../../../store/atoms/detailState';
import Photo from '../../../../../types/CardType';
import Toast from '../../../../../components/common/toast/Toast';

function Detail() {
  const [likes, setLikes] = useState(false);
  const [toast, setToast] = useState(false);
  const [result, setResult] = useState(0);
  const [localLikes, setLocalLikes] = useRecoilState(storageState);
  const setIsOpen = useSetRecoilState(detailState);
  const selected = useRecoilValue(selectedState);

  useEffect(() => {
    const isLiked = localLikes.some((item: Photo) => item.id === selected?.id);
    setLikes(isLiked);
  }, [selected, localLikes]);

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
    const alreadyIn = localLikes.some(
      (item: Photo) => item.id === selected?.id,
    );

    if (!alreadyIn) {
      const newLikes = [...localLikes, selected];
      localStorage.setItem('likes', JSON.stringify(newLikes));
      setLocalLikes(newLikes);
      setLikes(true);
      setToast(true);
      setResult(1);
    } else {
      const newLikes = localLikes.filter(
        (item: Photo) => item.id !== selected?.id,
      );
      localStorage.setItem('likes', JSON.stringify(newLikes));
      setLocalLikes(newLikes);
      setLikes(false);
      setToast(true);
      setResult(0);
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
              src={selected?.user.profile_image.small}
              alt="profile"
              className={styles.profileImg}
            />
            <p className={styles.profileName}>{selected?.user.username}</p>
          </div>
          <div className={styles.container__header__menu}>
            {likes ? (
              <p
                className={`${'material-symbols-outlined'} ${
                  styles.container__header__close
                }`}
                onClick={handleClick}
                style={{
                  color: 'red',
                }}
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
            src={selected?.urls.small}
            alt="img"
          />
          <div className={styles.container__main__desc}>
            <h2>{selected?.alt_description}</h2>
            <h3>{selected?.likes} Likes</h3>
            <h3>{selected?.created_at.split('T')[0]}</h3>
          </div>
        </div>
      </div>
      {toast && (
        <Toast
          toast={toast}
          setToast={setToast}
          message={
            likes ? 'Likes에 추가되었습니다' : 'Likes에서 삭제되었습니다'
          }
          bottom={160}
          result={result}
        />
      )}
    </div>
  );
}

export default Detail;
