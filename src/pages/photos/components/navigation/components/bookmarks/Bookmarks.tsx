// CSS
import styles from './Bookmarks.module.scss';
// Recoil
import { useRecoilState, useSetRecoilState } from 'recoil';
import { bookmarkState } from '../../../../../../store/atoms/bookmarkState';
import { searchState } from '../../../../../../store/atoms/searchState';
import { pageState } from '../../../../../../store/atoms/pageState';

function Bookmarks() {
  const setSearch = useSetRecoilState(searchState);
  const setPageValue = useSetRecoilState(pageState);
  const [bookmarkArr, setBookmarkArr] = useRecoilState(bookmarkState);

  const handleCloseBtnClick = (pathToRemove: string) => {
    setBookmarkArr(prev => {
      const updateBookmarks = prev.filter(
        bookmark => bookmark.path !== pathToRemove,
      );

      localStorage.setItem('bookmark', JSON.stringify(updateBookmarks));

      return updateBookmarks;
    });
  };

  const handleClick = (paths: string) => {
    setSearch(paths);
    setPageValue(1);
  };

  return (
    <li className={styles.bookmark}>
      <p className={`${styles.bookmark__icon} ${'material-symbols-outlined'}`}>
        bookmark
      </p>
      {bookmarkArr.length < 1 ? (
        <p>북마크를 추가해보세요</p>
      ) : (
        bookmarkArr.map(bookmark => {
          return (
            <div className={styles.bookmark__main} key={bookmark.path}>
              <div
                className={`${
                  styles.bookmark__main__closeBtn
                } ${'material-symbols-outlined'}`}
                onClick={() => handleCloseBtnClick(bookmark.path)}
              >
                close
              </div>
              <p
                className={styles.bookmark__main__plainText}
                onClick={() => handleClick(`${bookmark.path}`)}
              >
                {bookmark.path}
              </p>
            </div>
          );
        })
      )}
    </li>
  );
}

export default Bookmarks;
