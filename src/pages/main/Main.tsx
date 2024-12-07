// CSS
import styles from './Main.module.scss';
// Component
import Darkmode from '../../components/common/darkmode/Darkmode';
// Recoil
import { darkState } from '../../store/atoms/darkState';
import { useRecoilValue } from 'recoil';
import Card from './components/Card';

function Main() {
  const isDark = useRecoilValue(darkState);

  return (
    <div className={styles.main}>
      <div
        className={`${styles.container} ${isDark ? styles.dark : styles.light}`}
      >
        <div className={styles.container__left}>
          <Card title="Photos" />
          <Card title="Comments" />
        </div>
        <div className={styles.container__right}>
          <Card title="Story" />
          <Card title="Skills" />
          <Card title="Works" />
          <Card title="Music" />
        </div>
        <Darkmode />
      </div>
    </div>
  );
}
export default Main;
