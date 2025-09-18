import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitForm = () => {
    console.log(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    const mstStatus = checkValidate(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(mstStatus.message);
    if (mstStatus.message) return;

    if (isSignInForm) {
      //login api call
      console.log("Login API Call");

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signup api call
      console.log("Signup API Call");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignup = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMAGE}
          alt="Netflix Background"
        />
      </div>

      <form className="w-full md:w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="name"
            ref={name}
            placeholder="Full Name"
            className="p-4 mt-4 w-full bg-gray-500"
          />
        )}

        <input
          type="email"
          ref={email}
          placeholder="Email or phone number"
          className="p-4 mt-4 w-full bg-gray-500"
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter Password"
          className="p-4 mt-4 w-full bg-gray-500"
        />
        <p className="text-red-500 p-1">{errorMessage}</p>
        <button
          type="button"
          className="p-4 mt-4 w-full bg-red-600"
          onClick={handleSubmitForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-4" onClick={handleSignup}>
          {isSignInForm
            ? "New to Netflix?Sign up now."
            : "Already created Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
