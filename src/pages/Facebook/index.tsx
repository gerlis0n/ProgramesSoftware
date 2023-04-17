import * as C from './styles'; // Components
import imageFacebook from '../../images/imgfacebook.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Facebook = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate('/LoggedIn');
      } else {
        alert("Não deu certo.");
      }
    }
  }

  return (
    <C.Container>
      <C.Main>
        <C.Aside>
          <img src={imageFacebook} alt="Logo do Facebook" />
          <h2>
            O Facebook ajuda você a se conectar e compartilhar
            com as pessoas que fazem parte da sua vida.
          </h2>
        </C.Aside>
        <C.Body>
          <C.Form>
            <fieldset>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email ou telefone"
                id="login"
              />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Senha"
                id="senha"
              />
            </fieldset>
            <input
              type="submit"
              value="Entrar"
              onClick={handleLogin}
              id="avancar"
            />
            <a
              href='https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0'
            >
              Esqueceu a senha?
            </a>
            <hr />
            <input
              type="submit"
              value="Criar nova Conta"
              id="novaConta"
            />
          </C.Form>
          <C.Footer>
            <p>
              <a href="https://www.facebook.com/pages/create/?ref_type=registration_form"
              >
                Criar uma página</a> para uma celebridade, uma marca ou uma empresa.
            </p>
          </C.Footer>
        </C.Body>
      </C.Main>
    </C.Container>
  );
}
