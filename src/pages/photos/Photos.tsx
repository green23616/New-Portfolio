// CSS
import styles from './Photos.module.scss';
// Components
import Main from './components/main/Main';
import Navigation from './components/navigation/Navigation';
// Recoil
import { useSetRecoilState } from 'recoil';
import { searchState } from '../../store/atoms/searchState';
import { pageState } from '../../store/atoms/pageState';
import { useEffect } from 'react';

function Photos() {
  useEffect(() => {
    console.log('Photos Render');
  });

  const setSearch = useSetRecoilState(searchState);
  const setPageValue = useSetRecoilState(pageState);

  const handleClick = (paths: string) => {
    setSearch(paths);
    setPageValue(1);
  };

  return (
    <div className={styles.photos}>
      <header className={styles.photos__header}>
        <h1 onClick={() => handleClick('fruit')}>La Galleria</h1>
      </header>
      <Navigation />
      <Main />
      <footer className={styles.photos__footer}>
        <h4>Original Design, Code by JW 2024</h4>
      </footer>
    </div>
  );
}

export default Photos;
