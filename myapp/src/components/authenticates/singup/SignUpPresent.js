import { Link } from 'react-router-dom';

export const SignUpPresent = (props) => {
    return (
        <div >
            <form onSubmit={props.submit} className="login-form signup-form">
                <p>Fill in the form below to register new account.</p>
                <div>
                    <input
                    className="login-form__input signup-form__input"
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={props.emailChange}
                    value={props.email}
                    />
                </div>
                <div>
                    <input
                    className="login-form__input signup-form__input"
                    placeholder="Password"
                    name="password"
                    onChange={props.passChange}
                    value={props.password}
                    type="password"
                    />
                </div>
                <div>
                    {props.error && <p>{props.error}</p>}
                    <button type="submit" className="login-form__button signup-form__button">Sign up</button>
                </div>
                <hr />
                <p>
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </form>
      </div>
  
    )
}