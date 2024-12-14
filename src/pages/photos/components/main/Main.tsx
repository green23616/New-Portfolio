import axios from 'axios';
// CSS
import styles from './Main.module.scss';
// Components
import Up from '../../../../components/common/up/Up';
import Card from '../card/Card';
// Tanstack Query
import { useQuery } from '@tanstack/react-query';
// Recoil
import { useRecoilValue } from 'recoil';
import { searchState } from '../../../../store/atoms/searchState';
// Type
import Photo from '../../../../types/CardType';
import { useState } from 'react';
import Detail from '../detail/Detail';

function Main() {
  const searchValue = useRecoilValue(searchState);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({});

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
      <div className={styles.container}>
        {isLoading && <p>Loading</p>}
        {isError && <p>Error</p>}
        {data &&
          data.results.map((e: Photo) => {
            return (
              <Card
                data={e}
                key={e.id}
                src={e.urls.regular}
                id={e.id}
                setIsOpen={setIsOpen}
                setSelected={setSelected}
              />
            );
          })}
        {isOpen && <Detail setIsOpen={setIsOpen} selected={selected} />}
        <Up />
      </div>
    </main>
  );
}

export default Main;
