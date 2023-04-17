import './styles';
import * as C from './styles'; // C Components
import imageMicrosoft from '../../images/microsoft.svg';
import imageKeyOutline from '../../images/keyOutlined.svg';
import imageHelp from '../../images/Help.svg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Microsoft = () => {
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
        <C.Form>
          <img src={imageMicrosoft} alt="Imagem da Microsoft" />
          <h3>Entrar</h3>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder=" Email, telefone ou Skype"
            id="login"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            id="Senha"
          />
          <p>
            Não tem uma conta?
            <a href="https://signup.live.com"> Crie uma!</a>
          </p>
          <p>
            <a
              href="https://login.microsoft.com/consumers/fido/get?mkt=PT-BR&lc=1046&uiflavor=web"
            >
              Entrar com uma chave de segurança
              <img
                src={imageHelp}
                alt="help"
                title="Entrar com uma chave de segurança.
                Entrar sem um nome de usuário ou senha usando uma chave de segurança.
                Para usar esta opção, você deve tê-la configurado anteriormente em sua conta.
                Saiba como configurá-la"
              />
            </a>
          </p>
          <fieldset>
            <input
              type="submit"
              value="Próximo"
              onClick={handleLogin}
              id="proximo"
            />
          </fieldset>
        </C.Form>
        <C.Options>
          <div>
            <img src={imageKeyOutline} alt="key" />
            <h3>Opções de entrada</h3>
          </div>
        </C.Options>
      </C.Main>
    </C.Container>
  );
}