// CSS
import styles from './Main.module.scss';
// Components
import Darkmode from '../../components/common/darkmode/Darkmode';
// Recoil
import { darkState } from '../../store/atoms/darkState';
import { useRecoilValue } from 'recoil';
import Card from './components/Card';
import Header from '../../components/common/header/Header';

function Main() {
  const isDark = useRecoilValue(darkState);
  return (
    <div className={styles.main}>
      <Header/>
      <div
        className={`${styles.container} ${isDark ? styles.dark : styles.light}`}
      >
        <div className={styles.container__left}>
          <Card title="Photos" page="photos" />
          <Card title="Study" page="study" />
        </div>
        <div className={styles.container__right}>
          <Card title="Skills" page="skills" />
          <Card title="Works" page="works" />
          <Card title="Story" page="story" />
          <Card title="Music" page="music" />
        </div>
        <Darkmode />
      </div>
    </div>
  );
}
export default Main;
