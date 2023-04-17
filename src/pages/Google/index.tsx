import './styles';
import * as C from './styles'; // Components
import imageGoogle from '../../images/imgGoogle.jpg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Google = () => {
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
        <C.Body>
          <C.Head>
            <img src={imageGoogle} alt="Google" width="75px" />
            <h3>
              Fazer login
            </h3>
            <p>
              Ir para o Gmail
            </p>
          </C.Head>
          <C.Form>
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder=" Email ou telefone"
              id="email"
            />
            
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder=" Senha"
              id="senha"
            />
            <p id="esqueceuEmail">
              Esqueceu seu e-mail ?
            </p>
            <fieldset>
              <p id="criarConta">
                Criar Conta
              </p>
              <input
                type="submit"
                value="Próximo"
                onClick={handleLogin}
                id="avancar"
              />
            </fieldset>
          </C.Form>
        </C.Body>
        <C.Footer>
          <select>
            <option>Português (Brasil)</option>
            <option>Inglês (United States)</option>
            <option>Español (España)</option>
          </select>
          <form>
            <h4>
              Ajuda
            </h4>
            <h4>
              Privacidade
            </h4>
            <h4>
              Termos
            </h4>
          </form>
        </C.Footer>
      </C.Main>
    </C.Container>
  );
}
