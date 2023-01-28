import CATEGORY from '@src/constants/category';
import { atom } from 'recoil';

const categoryState = atom({
  key: 'categoryState',
  default: CATEGORY.RECIPE,
});

export default categoryState;
