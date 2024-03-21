import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((prevState) => prevState - 100);
        }, 100);

        return () => {
            clearInterval(timer);
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            onTimeout();
        }, timeout);

        return () => { clearTimeout(timer) };

    }, [timeout, onTimeout]);

    return (
        <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
    )
}