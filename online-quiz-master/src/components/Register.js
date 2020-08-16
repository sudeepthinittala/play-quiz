import React,{Fragment ,useState} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
const Register =()=>{
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypepassword, retypesetPassword] = useState("");
    function validateForm() {
        return text.length > 0 && password.length > 0 && password===retypepassword;
      }
      const sendData = async e => {
        // e.preventDefault();
        const name=text;
        const newemail=email;
        const message=password;
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/sudeepthi/google_sheets/ogeeFOPybHOycAsN?tabId=UserData",
                {
                    method: "post",
                    body: JSON.stringify([[name, newemail, message]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            // setMessage("Success");
        } catch (error) {
            console.error("Error:", error);
            // setMessage("Error");
        }
        
       
    };
    return (
        <Fragment>
            <Helmet><title>register page</title></Helmet>
            <h2>Register</h2>
            <form className="login-container input-form"  id="contact" name="contact">
            <label>
                User Name:
                <input type="text" value={text} onChange={e => setText(e.target.value)} name="name" />
                Mail id:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="mail" />
                Set Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" />
                Retype Password: 
                <input type="password" value={retypepassword} onChange={e => retypesetPassword(e.target.value)}name="password" />
            </label>
           
            <Link to={validateForm()?{ pathname:"/sudeepthinittala/online-quiz/play/instructions/",aboutProps:{text}} : {pathname:"/sudeepthinittala/online-quiz/register"} }   type="submit" value="Send" ><button className="button" onClick={validateForm && sendData}>Submit</button></Link>
            </form>
        </Fragment>
    );
};
export default Register;