// CSS
import styles from './Darkmode.module.scss';
// Recoil
import { useRecoilState } from 'recoil';
import { darkState } from '../../../store/atoms/darkState';

function Darkmode() {
  const [isDark, setIsDark] = useRecoilState(darkState);

  const handleClick = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className={styles.darkmode} onClick={handleClick}>
      {isDark === false ? 'Dark' : 'Light'}
    </div>
  );
}

export default Darkmode;
