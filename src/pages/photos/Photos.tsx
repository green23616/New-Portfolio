import styles from './Photos.module.scss';

function Photos() {
  return (
    <div className={styles.photos}>
      <div className={styles.container}>
        <header className={styles.container__header}>
          <h1>PhotoBook</h1>
        </header>
        <main className={styles.container__main}>
          <div className={styles.container__main__upper}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum doloremque veniam, eaque, natus cumque libero quo laboriosam
            fuga unde nostrum eius voluptas officia voluptate neque praesentium
            harum blanditiis? Accusantium!
          </div>
          <div className={styles.container__main__below}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum doloremque veniam, eaque, natus cumque libero quo laboriosam
            fuga unde nostrum eius voluptas officia voluptate neque praesentium
            harum blanditiis? Accusantium!
          </div>
        </main>
        <footer className={styles.container__footer}>footer</footer>
      </div>
    </div>
  );
}

export default Photos;
