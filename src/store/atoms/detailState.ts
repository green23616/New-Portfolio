// Type
import Photo from '../../types/CardType';
// Recoil
import { atom } from 'recoil';

export const detailState = atom({
  key: 'detailState',
  default: false,
});

export const selectedState = atom<Photo | null>({
  key: 'selectedState',
  default: null,
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedValue = localStorage.getItem('selectedPhoto');
      if (savedValue) {
        setSelf(JSON.parse(savedValue));
      }

      onSet(newValue => {
        if (newValue === null) {
          localStorage.removeItem('selectedPhoto');
        } else {
          localStorage.setItem('selectedPhoto', JSON.stringify(newValue));
        }
      });
    },
  ],
});
