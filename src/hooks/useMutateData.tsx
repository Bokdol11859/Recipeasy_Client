import { toggleRecipe, toggleTheme } from '@src/api/fetcher';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useMutateData = (id: number) => {
  const queryClient = useQueryClient();

  const recipeMutation = useMutation({
    mutationFn: (id: number) => toggleRecipe(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['UserInfo'] });
      await queryClient.invalidateQueries({ queryKey: ['recipe', id] });
    },
  });

  const themeMutation = useMutation({
    mutationFn: (id: number) => toggleTheme(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['UserInfo'] });
      await queryClient.invalidateQueries({ queryKey: ['theme', id] });
    },
  });

  return { recipeMutation, themeMutation };
};

export default useMutateData;
