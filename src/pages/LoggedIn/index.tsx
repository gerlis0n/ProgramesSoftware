import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext } from "react";
import { Form } from "./styles";

export const LoggedIn = () => {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <Form>
      <h1>Olá {auth.user?.name}, tudo bem?</h1>
      <nav>
        {auth.user && <button onClick={handleLogout}>Sair</button>}
      </nav>
    </Form>
  );
}