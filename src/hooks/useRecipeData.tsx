import { getRecipeDetail, toggleRecipe } from '@src/api/fetcher';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useRecipeData = (id: number) => {
  const queryClient = useQueryClient();

  const recipeQuery = useQuery(['recipe', id], () => getRecipeDetail(id));
  const recipeMutation = useMutation({
    mutationFn: (id: number) => toggleRecipe(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['UserInfo'] });
      await queryClient.invalidateQueries({ queryKey: ['recipe', id] });
    },
  });

  return { recipeMutation, recipeQuery };
};

export default useRecipeData;
