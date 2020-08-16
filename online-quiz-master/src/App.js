import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import QuizInstructions from './components/quiz/QuizInstructions';
import Home from './components/Home';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Route path="/sudeepthinittala/online-quiz/home"  component={Home}/>
      <Route path="/sudeepthinittala/online-quiz/play/instructions"  component={QuizInstructions}/>
      <Route path="/sudeepthinittala/online-quiz/play/quiz" component={Play}/>
      <Route path="/sudeepthinittala/online-quiz/play/quizSummary"  component={QuizSummary}/>
      <Route path="/sudeepthinittala/online-quiz/login"  component={Login}/>
      <Route path="/sudeepthinittala/online-quiz/register"  component={Register}/>
    </Router>
  );
}

export default App;
