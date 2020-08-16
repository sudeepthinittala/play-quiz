import React, { Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import img from '../../assets/images/Screenshot (162).png'
import img1 from '../../assets/images/Screenshot (163).png'
import img2 from '../../assets/images/Screenshot (164).png'
import img3 from '../../assets/images/Screenshot (165).png'
import img4 from '../../assets/images/Screenshot (166).png'

const QuizInstructions =(props)=>{
    const temp=JSON.stringify(props.location.aboutProps);
    const obj=JSON.parse(temp);
    // console.log(props);
    return(
    <Fragment>
    <Helmet><title>Quiz Instructions</title></Helmet>
    <div className="instructions container">
      <h5>Hi! {obj.text}</h5>
        <h1>How to play the game</h1>
    <p>Ensure you read this guide from start to finish</p>
    <ul>
        <li>Every question haas four options</li>
        <li>Quiz has 10 questions</li>
    </ul>
    <br></br>
    <p>Interface for playing quiz</p>
    <img src={img} width="1000px" height="500px" alt="img"/>
    <p>If you click the wrong answer then it displays red in colour</p>
     <img src={img1} width="1000px" height="500px" alt="img"/>
     <p>If you click the right answer then it displays green in colour</p>
      <img src={img2} width="1000px" height="500px" alt="img"/>
      <p>If you want to exit the quiz then you can use quit option below, then it asks for conformation and then it is redirected to home page</p>
       <img src={img3} width="1000px" height="500px" alt="img"/>
    <p>At last after completion of the quiz, score will be displayed as shown in the figure</p>
       <img src={img4} width="1000px" height="500px" alt="img"/>
    <div>
        <span className="left"><Link to="/sudeepthinittala/online-quiz/home"> Take me back</Link></span>
        <span className="right"><Link to= {{pathname:"/sudeepthinittala/online-quiz/play/quiz" ,aboutProps:obj.text}} > Next</Link></span>
    </div>
    </div>
    </Fragment>
    );
};
export default QuizInstructions;