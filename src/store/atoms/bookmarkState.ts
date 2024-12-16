import { atom } from 'recoil';

export const bookmarkState = atom({
  key: 'bookmarkState',
  default: [
    {
      path: 'apple',
    },
    {
      path: 'car',
    },
    {
      path: 'book',
    },
    {
      path: 'conference',
    },
  ],
});
