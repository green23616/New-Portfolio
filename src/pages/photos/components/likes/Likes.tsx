import styles from './Likes.module.scss';

function Likes() {
  const likes = JSON.parse(localStorage.getItem('likes') || '[]');

  return (
    // <div className={styles.likes}>
    //   <div className={styles.container}>
    //     <h1>
    //       ho
    //     </h1>
    //   </div>
    // </div>
  );
}

export default Likes;
