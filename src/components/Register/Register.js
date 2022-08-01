import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { showToast } from '../../utils';

const Register = (props) => {
  const DEFAULT_STATE = {
    USER:{
    name: "",
    email: "",
    password: "",
  },
  ERRORS:{
    email: "",
    name: "",
    isErrors: true,
    password:""
  }
}

  

  
  const [user, setUser] = useState(DEFAULT_STATE.USER);
  const [errors, setErrors] = useState(DEFAULT_STATE.ERRORS);
  const [errorsClearered, setErrorsCleared] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    if(!errorsClearered) resetErrors();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const resetErrors = () =>{
    setErrorsCleared(true);
    setErrors(DEFAULT_STATE.ERRORS)
  }

  
  const clearForm = () =>{
   
    setErrors(DEFAULT_STATE.ERRORS)
    setUser(DEFAULT_STATE.USER)
  }

  
  const handleValidation = () =>{
    const errorsObj = {
      isErrors:true,
      password:'',
      email:'',
      name:''
    };
 
  if(!user.name) {
    errorsObj.name = `Name can't be empty.`
  }

  if(!user.password){
    errorsObj.password = `password can't be empty.`;
  }else if(user.password.length < 6)
  {
    errorsObj.password = `Password should be of minimum 6 characters`
  }

  if(!user.email){
    errorsObj.email = `email can't be empty`;
  }else
  {
    let lastAtPos = user.email.lastIndexOf("@");
    let lastDotPos = user.email.lastIndexOf(".");
  

  if (
    !(
      lastAtPos < lastDotPos &&
      lastAtPos > 0 &&
      user.email.indexOf("@@") === -1 &&
      lastDotPos > 2 &&
      user.email.length - lastDotPos > 2
    )
  ) {
    errorsObj.email = 'Invalid Email';
  }
}

if(!errorsObj.email && !errorsObj.password && !errorsObj.name) errorsObj.isErrors = false;
setErrors(errorsObj)
return errorsObj;
}

  

  const onSubmit = () => {
    const errors = handleValidation();
    console.log(errors);
    if(errors.isErrors) {
      setErrorsCleared(false);
      return;
    }
    
    fetch("http://localhost:5000/api/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        name: user.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        
        if(user.status === "OK") {
          //alert('login successfull')
          console.log('Login successfull.');
          showToast('Registration successfull', 'success');
          clearForm();
          navigate('/signin')
        } else {
          showToast('Invalid credentials.', 'error')
        }
        // setUser(INITIAL_USER_VALUE)
     });
  };
  


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80">
                <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Registeration</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                        type="text"
                        name="name"
                        placeholder="Name"
                        id="name"
                        value={user.name}
                        onChange={e => changeHandler(e)}
                        

                      />
                      <div>{errors.name}</div>
                    </div>
                    <div className="mt3">
                      <label
                        className="db fw6 lh-copy f6"
                        htmlFor="email-address"
                      >
                        Email
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        id="email-address"
                        onChange={e => changeHandler(e)}
                     
                      />
                      <div>{errors.email}</div>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        id="password"
                        onChange={e => changeHandler(e)}
                        
                      />
                      <div>{errors.password}</div>
                    </div>
                  </fieldset>
                  <div className="">
                    <input
                      onClick={onSubmit}
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                      type="submit"
                      value="Register"
                    />

              {/* <a href="/signinn" class="btn btn-primary">
                Register
              </a>     */}
                  </div>
                </div>
              </main>
            </article>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Register;