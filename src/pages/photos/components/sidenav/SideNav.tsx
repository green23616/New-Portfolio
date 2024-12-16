// CSS
import styles from './SideNav.module.scss';
// Types
import Photo from '../../../../types/CardType.ts';
// Recoil
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { likeState } from '../../../../store/atoms/likeState.ts';
import { storageState } from '../../../../store/atoms/storageState.ts';
// Component
import Card from './card/Card.tsx';

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
          ? '사진에 좋아요를 눌러보세요'
          : localLikes.map((like: Photo) => {
              return <Card like={like} key={like.id} />;
            })}
      </div>
    </div>
  );
}

export default SideNav;
