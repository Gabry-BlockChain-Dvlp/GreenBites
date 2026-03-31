// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import "../css/NavBar.css";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../services/firebase";
// import { signOut } from "firebase/auth";        

// function NavBar() {
//     const [User] = useAuthState(getAuth());

//     const signOutUser = async () => {
//         await signOut(auth);
//     };

//     return(
//     <nav className="navbar">
//         <div className="navbar-brand">
//             <a className="navbar-brand" href="/">GreenBites</a>
//         </div>
//         <div className="navbar-links">
//             <a href="/" className="nav-link">Home</a>

//             {!User ? (<a href="/login" className="nav-link">Login</a>) :
//              (<a onClick={signOutUser} className="nav-link">Logout</a>)}
//              {User && (
//         <div className="nav-user-info">
//           <p className="navDisplayName">{User?.displayName}</p>
//           <img src={User?.photoURL || ""} width="100" height="100" alt="profile pic"  className="navProfilePic"/>
//         </div>)}
//         </div>
//     </nav>
//     )
// }   

// export default NavBar;

import "../css/NavBar.css";
import { auth } from "../services/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

function NavBar({ user }) {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-brand" href="/">GreenBites</a>
      </div>
      <div className="navbar-links">
        <a href="/" className="nav-link">Home</a>
        {user && <a href="/favorites" className="nav-link">Preferiti</a>}
        {user ? (
          <div className="nav-user">
            <span className="nav-username">{user.displayName?.split(" ")[0]}</span>
            <button className="nav-auth-button" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button className="nav-auth-button" onClick={handleLogin}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;