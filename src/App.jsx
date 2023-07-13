import React, { useReducer } from 'react'
import { AnswersList, Button, FinishScreen, Header, Loader, Progress, Question, QuestionFooter, StartScreen, Timer } from './components'
import { useQuestions } from './hooks/useQuestions';


const initialState = {
  questions: [],
  currentQuestion: 0,
  status: '',
  userAnswer: null,
  gainedPoints: 0,
  timer: 420
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'questions/loading': return {
      ...state,
      status: 'loading'
    };
    case 'questions/error': return {
      ...state,
      status: 'error'
    };
    case 'questions/ready': return {
      ...state,
      status: 'ready',
      questions: payload
    };
    case 'questions/start': return {
      ...state,
      status: 'start',
    };
    case 'questions/finish': return {
      ...state,
      status: 'finish',
    };
    case 'questions/restart': return {
      ...initialState,
      status: 'ready',
      questions: state.questions
    };
    case 'questions/next': return {
      ...state,
      currentQuestion: state.currentQuestion + 1,
      userAnswer: null
    };
    case 'questions/answer':
      const question = state.questions.at(state.currentQuestion);
      return {
        ...state,
        userAnswer: payload,
        gainedPoints: +question.correctOption === payload ? state.gainedPoints + question.points : state.gainedPoints
      };

    case 'questions/timer/countDown':
      if (state.timer === 0) return { ...state, status: 'finish' }
      return {
        ...state,
        timer: state.timer - 1
      }

    default: throw new Error('Unknown Action Type : ' + type);
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, currentQuestion, status, userAnswer, gainedPoints, timer } = state;

  const numQuestions = questions.length;
  const totalPoints = questions.reduce((acc, curr) => acc + curr.points, 0);
  const lastQuestion = currentQuestion === numQuestions - 1;

  useQuestions(dispatch);
  return (
    <div className='app'>
      <Header />
      {status === 'loading' ? <Loader /> : null}
      {status === 'ready' ? <StartScreen numQuestions={numQuestions} dispatch={dispatch} /> : null}
      {
        status === 'start' ?
          <>
            <Progress
              numQuestions={numQuestions}
              currentQuestion={currentQuestion}
              totalPoints={totalPoints}
              gainedPoints={gainedPoints}
            />
            <Question question={questions.at(currentQuestion)} timer={timer} dispatch={dispatch}>
              <AnswersList answers={questions.at(currentQuestion).options} correctOption={questions.at(currentQuestion).correctOption} userAnswer={userAnswer} dispatch={dispatch} />
              <QuestionFooter >
                <Timer timer={timer} />
                {userAnswer !== null ? <Button onClick={() => dispatch({ type: `questions/${lastQuestion ? 'finish' : 'next'}` })}> {lastQuestion ? 'Finish' : 'Next'} </Button> : null}
              </QuestionFooter>
            </Question>
          </>
          :
          null
      }
      {status === 'finish' ? <FinishScreen gainedPoints={gainedPoints} totalPoints={totalPoints} dispatch={dispatch} /> : null}
    </div>
  )
}

export default App