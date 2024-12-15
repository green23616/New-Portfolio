// CSS
import styles from './SideNav.module.scss';
// Types
import Photo from '../../../../types/CardType';
// Recoil
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { likeState } from '../../../../store/atoms/likeState';
import { storageState } from '../../../../store/atoms/storageState';
// Component
import Card from '../sidenav/card/Card.tsx';

function SideNav() {
  const setLikePage = useSetRecoilState(likeState);
  const localLikes = useRecoilValue(storageState);

  return (
    <div className={styles.sidenav}>
      <div className={styles.container}>
        <div
          className={'material-symbols-outlined'}
          style={{ cursor: 'pointer', color: 'gray' }}
          onClick={() => setLikePage(false)}
        >
          close
        </div>
        <h2 className={styles.container__likelist}>
          <p
            className={`${'material-symbols-outlined'} ${
              styles.container__likelist__favorite
            }`}
          >
            favorite
          </p>
          Like list
        </h2>
        {localLikes.length < 1
          ? '사진에 좋아요 를 눌러보세요'
          : localLikes.map((like: Photo) => {
              return (
                <Card like={like} />
                // <div
                //   className={styles.container__main}
                //   key={like.id}
                // >
                //   <img
                //     className={styles.container__main__img}
                //     src={like.urls.small}
                //     alt={like.id}
                //   />
                //   <h3 className={styles.container__main__desc}>
                //     {like.alt_description}
                //   </h3>
                // </div>
              );
            })}
      </div>
    </div>
  );
}

export default SideNav;
