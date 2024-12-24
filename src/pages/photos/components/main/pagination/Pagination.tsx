// CSS
import styles from './Pagination.module.scss';
// Recoil
import { useRecoilState } from 'recoil';
import { pageState } from '../../../../../store/atoms/pageState';

interface PaginationProps {
  totalPages: number | null;
}

function Pagination({ totalPages }: PaginationProps) {
  const [pageValue, setPageValue] = useRecoilState(pageState);

  const pageGroupSize = 10;
  const currentGroup = Math.floor((pageValue - 1) / pageGroupSize);
  const startPage = currentGroup * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages || 0);

  const prevBtn = () => {
    if (startPage > 1) {
      setPageValue(startPage - pageGroupSize);
    }
  };

  const nextBtn = () => {
    if (totalPages && endPage < totalPages) {
      setPageValue(startPage + pageGroupSize);
    }
  };

  const handlePageClick = (page: number) => {
    setPageValue(page);
  };

  return (
    <div className={styles.pagination}>
      <div
        className={`${'material-symbols-outlined'} ${
          styles.pagination__prevBtn
        } ${startPage === 1 ? styles.disabled : ''}`}
        onClick={prevBtn}
      >
        chevron_left
      </div>
      <ul className={styles.pagination__number}>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const pageNumber = startPage + index;
          return (
            <li
              key={pageNumber}
              className={`${styles.pagination__number__el} ${
                pageValue === pageNumber ? styles.active : ''
              }`}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>
      <div
        className={`${'material-symbols-outlined'} ${
          styles.pagination__nextBtn
        } ${endPage === totalPages ? styles.disabled : ''}`}
        onClick={nextBtn}
      >
        chevron_right
      </div>
    </div>
  );
}

export default Pagination;
