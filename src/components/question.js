import { Fragment, useEffect, useState } from "react";
import QuestionItem from "./questionitem";

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScores] = useState(0);
  const [Current, setCurrent] = useState(0);

  const API_URL =
    "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });

    console.log(questions, questions.length);
  }, []);

  const handleWrongClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setScores(score + 10)
  };

  const handleNextQues = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setCurrent(Current + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting......");
  };

  return (
    <Fragment>
      {questions.length > 0 ? (
        questions.length > Current ? (
          <div className="inner-card">
            <QuestionItem
              handleWrongClick={handleWrongClick}
              handleRightClick={handleRightClick}
              question={questions[Current].question}
              correctAns={questions[Current].correct_answer}
              inCorrectAnswers={questions[Current].incorrect_answers}
            />
            <div className='btn-div'>
              <button className='next-ques-btn' onClick={handleNextQues}>Next</button>
            </div>
          </div>
        ) : (
          <div>
            <h3>Game over</h3>
            {/* <button onClick={handleSubmit}>Submit Quiz</button> */}
            <h3>Score : {score}</h3>
          </div>
        )
      ) : (
        <h3>Loading...</h3>
      )}
    </Fragment>
  );
};

export default Question;
