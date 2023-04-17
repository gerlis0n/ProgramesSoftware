import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Facebook } from "../../pages/Facebook";
import { Google } from "../../pages/Google";
import { Microsoft } from "../../pages/Microsoft";

export const AuthFacebook = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
      return <Facebook />;
  }

  return children;
}

export const AuthGoogle = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Google />;
  }
  return children;
}

export const AuthMicrosoft = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Microsoft />;
  }
  return children;
}