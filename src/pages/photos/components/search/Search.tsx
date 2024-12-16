import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
// CSS
import styles from './Search.module.scss';
// Recoil
import { useSetRecoilState } from 'recoil';
import { searchState } from '../../../../store/atoms/searchState';

function Search({}) {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const setSearch = useSetRecoilState(searchState);

  const handleClick = () => {
    setIsActive(prev => !prev);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearch(inputValue);
    }
  };

  return (
    <>
      <div
        className={`${'material-symbols-outlined'} ${styles.search}`}
        onClick={handleClick}
      >
        search
      </div>
      <input
        className={`${styles.searchBar} ${
          isActive ? styles.active : styles.inactive
        }`}
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleSubmit}
        placeholder="Enter 키로 검색"
      />
    </>
  );
}

export default Search;
