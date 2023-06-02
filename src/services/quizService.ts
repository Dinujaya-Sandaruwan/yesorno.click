import APIClient from './apiClient';

export interface Quiz {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface ResponseData {
    response_code: number;
    results: Quiz[];
}

export default new APIClient<ResponseData>('');
