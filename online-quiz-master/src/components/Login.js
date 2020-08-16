import React,{Fragment, useState } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
// import ReactToExcel from 'react-html-table-to-excel';
// import Spreadsheet from 'react-spreadsheet';


// import XLSX from ;

const Login =()=>{
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");
    function validateForm() {
        return (text.length > 0 && password.length > 0);
      }
    
    return (
        <Fragment>
        
            <Helmet><title>login page</title></Helmet>
            <h2>Login</h2>
            <form className="login-container" >
            {/* <table id="table-to-xls"> */}
            
                User Name:
                <input type="text" name="text" value={text} onChange={e => setText(e.target.value)}/>
                
                
                Password:
                <span className="tr"><input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/></span>
               
            {/* </table> */}
            <Link to={validateForm()?{ pathname:"/sudeepthinittala/online-quiz/play/instructions/",aboutProps:{text}} : {pathname:"/sudeepthinittala/online-quiz/login"}}  className="submit-button"  type="submit" value="submit" >Submit</Link>
            </form>
            {/* <ReactToExcel
                table="table"
                filename="excelfiles"
                sheet="sheet 1"
                buttonText="export"
            /> */}
        </Fragment>
    );
   
};
export default Login;