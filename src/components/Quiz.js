
import React,{ useState } from 'react';
import QuestionList from '../QuestionList';
import './Quiz.css';
function Quiz(){
    const questions =[
        {
            question : "what is React",
            options : ['css framework','React Library','React Framework'],
            answer : 'React Library'
        },
        {
            question:"what is 2+2" ,
            options:["3","4","5"],
            answer:"4"
        }
    ]
    const [currentQuestionIndex,setcurrentQuestionIndex]= useState(0);
    const [currentAnswer,setcurrentAnswer]=useState(null);
    const [score,setscore]= useState(0);
   
    const handleClick=(option)=>{
        setcurrentAnswer(option)
        if ( option  === questions[currentQuestionIndex].answer){
            setscore(score+1);
        }
    }
    const handlNextQuestion=()=>{
        setcurrentQuestionIndex(currentQuestionIndex + 1);
    }

    return (
        <div>{currentQuestionIndex < questions.length ?
           <div>
            <QuestionList question={questions[currentQuestionIndex].question}
            options= { questions[currentQuestionIndex].options}handleClick={handleClick}
            currentAnswer={currentAnswer}/>
            <button disabled={currentAnswer === null} className={currentAnswer===null?'button-disable':'button'} onClick={handlNextQuestion}>next question</button>
           </div>: <div>your score is {score} </div>
}
        </div>
    )

}
export default Quiz;