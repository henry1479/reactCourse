import { Link } from 'react-router-dom';


export const LoginPresent = (props) => {
    return (
        <div>
            <form onSubmit={props.submit}>
                <p>Fill in the form below to log in to your account.</p>
                <div>
                    <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={props.emailChange}
                    value={props.email}
                    />
                </div>
                <div>
                    <input
                    placeholder="Password"
                    name="password"
                    onChange={props.passChange}
                    value={props.password}
                    type="password"
                    />
                </div>
                <div>
                    {props.error && <p>{props.error}</p>}
                    <button type="submit">Login</button>
                </div>
                <hr />
                <p>
                    Do no have an account? <Link to="/signup">Sign In</Link>
                </p>
            </form>
      </div>
  
        
    )
}