import React from 'react';
import { useState } from 'react';
import useQuiz from '../hooks/api/useQuiz';
import { Quiz as Quizzz } from '../services/quizService';

const Quiz = () => {
    const { data, error, isLoading } = useQuiz();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    console.log(data);

    return (
        <h1>
            {data.results.map((quiz: Quizzz, index: number) => (
                <li key={index} className="list-group-item">
                    {quiz.question}
                </li>
            ))}
        </h1>
    );
};

export default Quiz;
