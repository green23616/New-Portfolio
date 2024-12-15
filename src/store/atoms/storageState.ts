import { atom } from 'recoil';

export const storageState = atom({
  key: 'storageState',
  default: JSON.parse(localStorage.getItem('likes') || '[]'),
});
