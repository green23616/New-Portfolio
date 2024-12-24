import { atom } from 'recoil';

export const storageState = atom({
  key: 'storageState',
  default: [],
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedValue = localStorage.getItem('likes');
      if (savedValue) {
        setSelf(JSON.parse(savedValue));
      }

      onSet(newValue => {
        if (newValue.length === 0) {
          localStorage.removeItem('likes');
        } else {
          localStorage.setItem('likes', JSON.stringify(newValue));
        }
      });
    },
  ],
});
