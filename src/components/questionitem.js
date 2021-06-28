import { Fragment } from "react";

const QuestionItem = ({
  question,
  correctAns,
  inCorrectAnswers,
  handleWrongClick,
  handleRightClick,
}) => {
  return (
    <Fragment>
      <div>
        <div className='ques-div'>
          <h4 dangerouslySetInnerHTML={{ __html: question }} />
        </div>

        <div className="btn-div">
          <button onClick={handleRightClick} value={correctAns}>
            {correctAns}{" "}
          </button>
          </div>

          {inCorrectAnswers.map((el, idx) => (
          <div key={idx} className='btn-div'>
            <button  onClick={handleWrongClick} value={el} name={el}>
              {el}
            </button>
          </div>
          ))}
      </div>
    </Fragment>
  );
};

export default QuestionItem;
