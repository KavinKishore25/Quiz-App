import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Summary from "./Summary";
import Question from "./Question";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const questionIndex = userAnswers.length
    const quizIsComplete = questionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevState) => {
            return [...prevState, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);


    if (quizIsComplete) {
        return (
            <Summary userAnswers={userAnswers} />
        )
    }

    return (
        <div id="quiz">
            <div id="question">
                <Question key={questionIndex} index={questionIndex} onSelectAnswer={handleSelectAnswer} onSkipAnswer={handleSkipAnswer} />
            </div>
        </div >
    );
}