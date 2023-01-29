import { IngredientType } from './IngredientType';

interface RecipeType {
  id: number;
  video: string;
  title: string;
  time_taken: string;
  image: string;
  save_count: number;
  theme: number;
  required_ingredients: IngredientType[];
}

export default RecipeType;
