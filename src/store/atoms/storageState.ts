import { atom } from 'recoil';

export const storageState = atom({
  key: 'storageState',
  default: JSON.parse(localStorage.getItem('likes') || '[]'),
  effects_UNSTABLE: [
    ({ onSet }) => {
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
