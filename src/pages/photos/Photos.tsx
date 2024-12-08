// CSS
import styles from './Photos.module.scss';
import Main from './components/main/Main';
// Components
import Navigation from './components/navigation/Navigation';

function Photos() {
  return (
    <div className={styles.photos}>
      <div className={styles.container}>
        <header className={styles.container__header}>
          <h1>La Galleria</h1>
        </header>
        <Navigation />
        <Main />
        <footer className={styles.container__footer}>
          <h3>Original Design, Code by JW 2024</h3>
        </footer>
      </div>
    </div>
  );
}

export default Photos;
