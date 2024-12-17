// CSS
import styles from './Navigation.module.scss';
// Component
import SideNav from '../sidenav/SideNav';
import Bookmarks from './components/bookmarks/Bookmarks';
import Search from './components/search/Search.tsx';
// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { likeState } from '../../../../store/atoms/likeState';
import { storageState } from '../../../../store/atoms/storageState';

function Navigation() {
  const [likePage, setLikePage] = useRecoilState(likeState);
  const localLikes = useRecoilValue(storageState);

  const handleMouseOver = () => {
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
          onClick={handleMouseOver}
        >
          favorite
          <span>x {localLikes.length}</span>
        </li>
        {likePage && <SideNav />}
      </ul>
    </nav>
  );
}

export default Navigation;
