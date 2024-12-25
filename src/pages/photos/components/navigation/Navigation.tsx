// CSS
import styles from './Navigation.module.scss';
// Component
import Likes from './components/likes/Likes.tsx';
import Bookmarks from './components/bookmarks/Bookmarks';
import Search from './components/search/Search.tsx';
// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { likeState } from '../../../../store/atoms/likeState';
import { storageState } from '../../../../store/atoms/storageState';
import { useEffect } from 'react';

function Navigation() {
  useEffect(() => {
    console.log('Navigation Render');
  });
  const [likePage, setLikePage] = useRecoilState(likeState);
  const localLikes = useRecoilValue(storageState);

  const handleClick = () => {
    setLikePage(prev => !prev);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.container}>
        <Bookmarks />
        <Search />
        <li
          className={`${'material-symbols-outlined'} ${
            styles.container__likes
          }`}
          onClick={handleClick}
        >
          favorite
          <span>x {localLikes.length}</span>
        </li>
        {likePage && <Likes />}
      </ul>
    </nav>
  );
}

export default Navigation;
