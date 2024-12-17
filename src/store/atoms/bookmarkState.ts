import { atom } from 'recoil';

interface Bookmark {
  path: string;
}

export const bookmarkState = atom<Bookmark[]>({
  key: 'bookmarkState',
  default: JSON.parse(localStorage.getItem('bookmark') || '[]'),
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet(newValue => {
        localStorage.setItem('bookmark', JSON.stringify(newValue));
      });
    },
  ],
});
