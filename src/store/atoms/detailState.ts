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
});
