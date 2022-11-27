import React from "react";
import classes from './FinishedQuiz.module.css'
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if(props.results[key] === 'succes') {
            total++
        }

        return total
    },0)

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const color = props.results[quizItem.id]
                    const cls = ['fa', 
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                    ]
                    

                    return(
                        <li key={index} className={classes[color]}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                }) }
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <Button onClick={props.onRetry} type='primary'>
                Повторить
            </Button>

            <Link to="/">
                <Button type='succes'>
                    Перейти в список тестов
                </Button>
            </Link>
        </div>
    )
}

export default FinishedQuiz