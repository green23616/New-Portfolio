// CSS
import styles from './Main.module.scss';
// Type
import Photo from '../../../../types/CardType';
// Components
import Up from '../../../../components/common/up/Up';
import Card from './card/Card';
// Tanstack Query + axios
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// Recoil
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { detailState } from '../../../../store/atoms/detailState';
import { searchState } from '../../../../store/atoms/searchState';
import { bookmarkState } from '../../../../store/atoms/bookmarkState';
import Detail from './detail/Detail';

function Main() {
  const searchValue = useRecoilValue(searchState);
  const isOpen = useRecoilValue(detailState);
  const setBookmarkArr = useSetRecoilState(bookmarkState);

  const handleClick = () => {
    setBookmarkArr(prev => {
      if (prev.some(bookmark => bookmark.path === searchValue)) {
        alert('이미 북마크에 추가되어 있습니다');
        return prev;
      } else if (prev.length < 6) {
        return [...prev, { path: searchValue }];
      } else {
        alert('최대 6개까지 추가할 수 있습니다');
        return prev;
      }
    });
  };

  const API_URL = 'https://api.unsplash.com/search/photos';
  const API_KEY = 'Client-ID pAEouZcfIjwAylXEegT3seeJ5uAtN9-lmD29z0VLQIw';

  const API_FETCH = axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: API_KEY,
    },
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ['photos', searchValue],
    queryFn: async () => {
      const res = await API_FETCH.get('', {
        params: {
          query: searchValue,
          per_page: 24,
        },
      });
      if (res.status === 200) {
        return res.data;
      }
    },
    enabled: !!searchValue,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <main className={styles.main}>
      <div className={styles.searchInfo}>
        <h2>{searchValue}에 대한 검색결과</h2>
        <div
          className={`${'material-symbols-outlined'} ${
            styles.searchInfo__addBtn
          }`}
          onClick={handleClick}
        >
          bookmarks
        </div>
      </div>
      <div className={styles.container}>
        {isLoading && <p>Loading</p>}
        {isError && <p>Error</p>}
        {data && data.total === 0 && '검색결과가 존재하지 않습니다'}
        {data &&
          data.results.map((e: Photo) => {
            return <Card data={e} key={e.id} />;
          })}
        {isOpen && <Detail />}
        <Up />
      </div>
    </main>
  );
}

export default Main;
