import { auth, provider } from "../services/firebase";
import { signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom"; 

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
   const result = await signInWithPopup(auth, provider);
   console.log(result);
   navigate("/");
  };

  return (
  <div className="card">
    <p>Login with Google</p>
    <button onClick={signInWithGoogle} className="btn btn-primary">Sign in with Google</button>
    </div>
    );
};

Login.propTypes = {};

export default Login;

