// CSS
import styles from './Navigation.module.scss';
// Component
import Search from '../search/Search';
import SideNav from '../sidenav/SideNav';
// Recoil
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { searchState } from '../../../../store/atoms/searchState';
import { likeState } from '../../../../store/atoms/likeState';
import { storageState } from '../../../../store/atoms/storageState';
import { bookmarkState } from '../../../../store/atoms/bookmarkState';

function Navigation() {
  const setSearch = useSetRecoilState(searchState);
  const [likePage, setLikePage] = useRecoilState(likeState);
  const localLikes = useRecoilValue(storageState);
  const bookmarkArr = useRecoilValue(bookmarkState);

  const handleClick = (paths: any) => {
    setSearch(paths);
  };

  const handleMouseOver = () => {
    setLikePage(prev => !prev);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__ul}>
        <div
          className={`${'material-symbols-outlined'}`}
          style={{ fontSize: '24px', color: 'Red' }}
        >
          bookmark
        </div>
        {bookmarkArr.map(bookmark => {
          return (
            <li
              className={styles.navigation__ul__li}
              onClick={() => handleClick(`${bookmark.path}`)}
            >
              {bookmark.path}
            </li>
          );
        })}
        <Search />
        <div
          className={`${'material-symbols-outlined'} ${
            styles.navigation__ul__likes
          }`}
          onClick={handleMouseOver}
        >
          favorite
          <span className={styles.likeslength}>x {localLikes.length}</span>
        </div>
        {likePage && <SideNav />}
      </ul>
    </nav>
  );
}

export default Navigation;
