import React, { useReducer } from "react"
import QuizContext from "./quizContext"
import quizReducer from "./quizReducer"

import { OPEN_QUIZ, CLOSE_QUIZ } from "../types"

const QuizState = props => {
  const initialState = {
    quiz: false,
  }

  const [state, dispatch] = useReducer(quizReducer, initialState)

  // open quiz
  function openQuiz() {
    dispatch({ type: OPEN_QUIZ, payload: true })
  }

  // close quiz
  function closeQuiz() {
    dispatch({ type: CLOSE_QUIZ, payload: false })
  }

  return (
    <QuizContext.Provider value={{ quiz: state.quiz, openQuiz, closeQuiz }}>
      {props.children}
    </QuizContext.Provider>
  )
}

export default QuizState
