import classes from './LoginForm.module.css';
import useInput from '../hooks/use-input';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  
  const navigate = useNavigate();

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  const {
    value: enteredPass,
    isValid: enteredPassIsValid,
    hasError: passInputHasError,
    valueChangeHandler: passChangedHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPassInput,
  } = useInput((value) => value.trim() !== '');


  let formIsValid = false;

  if (enteredEmailIsValid &&  enteredPassIsValid) {
    formIsValid = true;
  }


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {  //si no es valido me voy

      return;
    }

    
    resetPassInput();
    resetEmailInput();
    navigate('/main');
  };



return (


    <div className={classes.container}>
    <div className={classes.wrapperBg}>
      <div className={`${classes.wrapper} ${emailInputHasError && classes.wrapperError} `}>
        <label style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>Sign In</label>
        <div className={classes.wrapperInput}>
          <label>Email</label>
          <input
           type='email'
           id='email'
           onChange={emailChangeHandler}
           onBlur={emailBlurHandler}
           value={enteredEmail}
          />
          {emailInputHasError && (
          <p className={classes.errorText}>Email must contain @</p>
        )}
        </div>
        <div className={classes.wrapperInput}>
          <label>Password</label>
          <input 
          type="password"
          id='password'
          onChange={passChangedHandler}
          onBlur={passBlurHandler}
          value={enteredPass}
          />
          {passInputHasError && (
          <p className={classes.errorText}>Password must not be empty.</p>
        )}
        </div>
        <button onClick={formSubmissionHandler}>Sign In</button>
      </div>
      <div style={{marginTop: '10px', flexDirection:'row'}}>
        <input type="checkbox"/><h3 style={{fontSize: '0.8rem', fontWeight:'lighter',color:'grey', display: 'inline'}}>Remember me</h3>
      </div>
    </div>
   </div>

)

}

export default LoginForm;