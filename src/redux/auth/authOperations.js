import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

import db from "../../firebase/config";
import { authSlice } from "./authReducer";

const { updateUserProfile, authSignOut, authStateChange } = authSlice.actions;

export const authSingUpUser =
  ({ image, login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const auth = getAuth(db);
      await createUserWithEmailAndPassword(auth, email, password, image, login);
      await updateProfile(auth.currentUser, {
        displayName: login, email,
      });
      const { uid, displayName , email} = await auth.currentUser;

      dispatch(
        updateUserProfile({
          userId: uid,
          nickName: displayName,
          email
        })
      );
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

export const authSingInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    console.log(email, password);
    try {
      const auth = getAuth(db);
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

export const authSingOutUser = () => async (dispatch, getState) => {
  const auth = getAuth(db);
  await signOut(auth);
  dispatch(authSignOut());
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  const auth = getAuth(db);
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      dispatch(
        updateUserProfile({
          userId: user.uid,
          nickName: user.displayName,
          email: user.email,
        })
      );
      dispatch(authStateChange({ stateChange: true }));
    } else {
    }
  });
};
