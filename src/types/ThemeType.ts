import RecipeType from './RecipeType';

interface ThemeType {
  description: string;
  duration: number;
  id: number;
  landscape_image: string;
  portrait_image: string;
  recipe_count: number;
  save_count: number;
  theme_type: number;
  tips: string;
  title: string;
  recipes: RecipeType[];
}

export default ThemeType;
