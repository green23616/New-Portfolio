import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
// CSS
import styles from './Search.module.scss';
// Recoil
import { useSetRecoilState } from 'recoil';
import { searchState } from '../../../../../../store/atoms/searchState';
import { pageState } from '../../../../../../store/atoms/pageState';

function Search() {
  const setSearch = useSetRecoilState(searchState);
  const setPageValue = useSetRecoilState(pageState);

  const [isActive, setIsActive] = useState(false);
  const [isText, setIstext] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    setIsActive(prev => !prev);

    if (!isActive) {
      setIstext(false);
    } else {
      setTimeout(() => {
        setIstext(true);
      }, 400);
    }

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (inputValue !== '') {
        setSearch(inputValue);
        setPageValue(1);
      } else {
        alert('공백은 입력할 수 없습니다');
      }
    }
  };

  return (
    <div className={`${'material-symbols-outlined'} ${styles.search}`}>
      <div
        className={`${'material-symbols-outlined'} ${styles.search__icon}`}
        onClick={handleClick}
      >
        search
      </div>
      <input
        aria-label="검색"
        className={`${styles.search__searchBar} ${
          isActive ? styles.active : styles.inactive
        }`}
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleSubmit}
        placeholder=" Enter 키로 검색"
      />
      <div style={{ fontSize: '16px' }}>
        {isText && !isActive && '돋보기를 눌러 검색을 시작하세요'}
      </div>
    </div>
  );
}

export default Search;
