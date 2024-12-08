import { useSetRecoilState } from 'recoil';
import Search from '../search/Search';
import styles from './Navigation.module.scss';
import { searchState } from '../../../../store/atoms/searchState';

function Navigation() {
  const setSearch = useSetRecoilState(searchState);

  const handleClick = (paths: string) => {
    setSearch(paths);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__ul}>
        <li
          className={styles.navigation__ul__li}
          onClick={() => handleClick('seoul')}
        >
          Seoul
        </li>
        <li
          className={styles.navigation__ul__li}
          onClick={() => handleClick('apple')}
        >
          Apple
        </li>
        <li
          className={styles.navigation__ul__li}
          onClick={() => handleClick('developer')}
        >
          Developer
        </li>
        <li
          className={styles.navigation__ul__li}
          onClick={() => handleClick('car')}
        >
          Car
        </li>
        <li
          className={styles.navigation__ul__li}
          onClick={() => handleClick('book')}
        >
          Book
        </li>
        <Search />
      </ul>
    </nav>
  );
}

export default Navigation;
