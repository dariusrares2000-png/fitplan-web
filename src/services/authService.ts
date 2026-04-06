import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from './firebase';

const auth = getAuth(app);

export const login = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};