import { atom } from 'recoil';

const queryState = atom({
  key: 'queryState',
  default: '',
});

export default queryState;
