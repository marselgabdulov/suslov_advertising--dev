import { OPEN_QUIZ, CLOSE_QUIZ } from "../types"

export default (state, action) => {
  switch (action.type) {
    case OPEN_QUIZ:
    case CLOSE_QUIZ:
      return {
        quiz: action.payload,
      }
    default:
      return state
  }
}
