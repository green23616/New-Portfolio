// CSS
import styles from './Photos.module.scss';
import Main from './components/main/Main';
// Components
import Navigation from './components/navigation/Navigation';
// Recoil
import { useSetRecoilState } from 'recoil';
import { searchState } from '../../store/atoms/searchState';

function Photos() {
  const setSearch = useSetRecoilState(searchState);

  const handleClick = (paths: string) => {
    setSearch(paths);
  };

  return (
    <div className={styles.photos}>
      <div className={styles.container}>
        <header className={styles.container__header}>
          <h1 onClick={() => handleClick('fruit')}>La Galleria</h1>
        </header>
        <Navigation />
        <Main />
        <footer className={styles.container__footer}>
          <h4>Original Design, Code by JW 2024</h4>
        </footer>
      </div>
    </div>
  );
}

export default Photos;
