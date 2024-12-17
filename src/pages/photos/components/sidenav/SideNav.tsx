// CSS
import styles from './SideNav.module.scss';
// Types
import Photo from '../../../../types/CardType.ts';
// Component
import Card from './card/Card.tsx';
// Recoil
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { likeState } from '../../../../store/atoms/likeState.ts';
import { storageState } from '../../../../store/atoms/storageState.ts';
import { selectedState } from '../../../../store/atoms/detailState.ts';

function SideNav() {
  const setLikePage = useSetRecoilState(likeState);
  const resetSelected = useResetRecoilState(selectedState);
  const resetStorage = useResetRecoilState(storageState);
  const localLikes = useRecoilValue(storageState);

  const handleDelete = () => {
    resetSelected();
    resetStorage();
  };

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
            list
          </p>
          Like list
        </h2>
        <p
          className={`${'material-symbols-outlined'} ${
            styles.container__likelist__delete
          }`}
          onClick={handleDelete}
        >
          delete
        </p>
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
