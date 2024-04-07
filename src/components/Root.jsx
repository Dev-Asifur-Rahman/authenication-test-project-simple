import { Outlet } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import apps from "../firebase/firebase_config";



const provider = new GoogleAuthProvider();
const auth = getAuth(apps );
const Root = () => {
    const signfunc = () => {
        signInWithPopup(auth,provider)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            Hello
            <button onClick={signfunc}>Sign in </button>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;