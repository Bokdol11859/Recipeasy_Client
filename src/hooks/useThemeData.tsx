import { getThemeDetail, getUserInfo, toggleTheme } from '@src/api/fetcher';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useData = (id: number) => {
  const queryClient = useQueryClient();
  const userInfo = useQuery(['UserInfo'], getUserInfo);

  const themeQuery = useQuery(['theme', id], () => getThemeDetail(id));
  const themeMutation = useMutation({
    mutationFn: (id: number) => toggleTheme(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['UserInfo'] });
      await queryClient.invalidateQueries({ queryKey: ['theme', id] });
    },
  });

  return { themeMutation, themeQuery };
};

export default useData;
