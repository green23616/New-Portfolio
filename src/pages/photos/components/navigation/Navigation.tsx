import { useSetRecoilState } from 'recoil';
import Search from '../search/Search';
import styles from './Navigation.module.scss';
import { searchState } from '../../../../store/atoms/searchState';
import { useState } from 'react';

function Navigation() {
  const setSearch = useSetRecoilState(searchState);

  const [likePage, setLikePage] = useState(false);

  const handleClick = (paths: string) => {
    setSearch(paths);
  };

  const handleMouseOver = () => {
    setLikePage(true);
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
        <div
          className={'material-symbols-outlined'}
          style={{ color: 'red' }}
          onMouseOver={handleMouseOver}
        >
          favorite
        </div>
        {likePage && (
          <div className={styles.navigation__ul__likePage}>나야</div>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
