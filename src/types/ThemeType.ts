import RecipeType from './RecipeType';

interface ThemeType {
  description: string;
  duration: number;
  id: number;
  image: string;
  recipe_count: number;
  save_count: number;
  theme_type: number;
  tips: string;
  title: string;
  recipes: RecipeType[];
}

export default ThemeType;
