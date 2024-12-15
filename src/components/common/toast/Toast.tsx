import { useEffect } from 'react';
import styles from './Toast.module.scss';

interface toastProps {
  toast: boolean;
  setToast: (value: boolean) => void;
  message: string | number;
  bottom: number;
  result: number;
}

function Toast({ setToast, message, bottom, result }: toastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={` ${styles.toast}`} style={{ bottom: `${bottom}px` }}>
      <div
        className={styles.container}
        style={{ backgroundColor: result ? 'green' : '#fb3c3c' }}
      >
        <div className={styles.container__main}>
          <div className={styles.container__main__status}>
            <p className={'material-symbols-outlined'}>
              {result ? 'check_circle' : 'download_done'}
            </p>
          </div>
          <div className={styles.container__main__message}>
            <h2>{result ? '추가 완료' : '삭제 완료'}</h2>
            <h4>{message}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
