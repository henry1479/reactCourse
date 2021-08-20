import { Link } from 'react-router-dom';


export const LoginPresent = (props) => {
    return (
        <div style={{marginTop:'20px'}}>
            <form onSubmit={props.submit} className="login-form">
                <p>Fill in the form below to log in to your account.</p>
                <div>
                    <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={props.emailChange}
                    value={props.email}
                    className="login-form__input"
                    />
                </div>
                <div>
                    <input
                    placeholder="Password"
                    name="password"
                    onChange={props.passChange}
                    value={props.password}
                    type="password"
                    className="login-form__input"
                    />
                </div>
                <div>
                    {props.error && <p>{props.error}</p>}
                    <button type="submit" className="login-form__button">Login</button>
                </div>
                <hr style={{background:'rgb(79, 144, 243)'}}/>
                <p>
                    Do no have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
      </div>
  
        
    )
}