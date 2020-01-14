import React, { useContext } from "react"
import "./Quiz.scss"
import QuizContext from "../../context/Quiz/quizContext"

function Quiz(props) {
  const quizContext = useContext(QuizContext)
  const { quiz, closeQuiz } = quizContext

  function handleClose() {
    closeQuiz()
  }

  return (
    <div className={quiz ? "quiz" : "quiz--hidden"}>
      <div className="quiz__wrapper" onClick={handleClose}></div>
      <div className="quiz__area">
        <p>Future Quiz</p>
      </div>
    </div>
  )
}

export default Quiz
