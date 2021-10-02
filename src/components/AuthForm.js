import { useState } from "react";
import { authService } from "fbase";

const AuthForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onChange = (event) => {
        const { target: { name, value }, } = event;
        if (name === 'email') {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                data = await authService.signInWithEmailAndPassword(email, password);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <form onSubmit={onSubmit} className='container'>
                <input type="email" className='authInput' name="email" placeholder="Email" required value={email} onChange={onChange} />
                <input type="password" className='authInput' name="password" placeholder="Password" value={password} onChange={onChange} required />
                <input type="submit" className='authInput' value={newAccount ? "Create Account" : "Log In"} />
                {error && <span className='authError'>{error}</span>}
            </form>
            <span onClick={toggleAccount} className='authSwitch'>
                {newAccount ? "Sign In" : "Create Account"}
            </span>
        </>
    );
};

export default AuthForm;