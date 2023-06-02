import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_QUIZ } from '../../constants';
import QuizService, { Quiz, ResponseData } from '../../services/quizService';

const useTodos = () => {
    return useQuery<ResponseData, Error>({
        queryKey: CACHE_KEY_QUIZ,
        queryFn: QuizService.quiz,
        staleTime: 10 * 1000,
    });
};

export default useTodos;
