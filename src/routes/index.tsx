import imageFacebook from '../images/facebook.svg';
import imageGoogle from '../images/google.svg'
import imageMicrosoft from '../images/microsoft.svg'
import { Routes, Route, Link } from 'react-router-dom';
import { Nav } from './styles';
import * as R from '../contexts/Auth/RequireAuth'; //RequireAuth
import { LoggedIn } from '../pages/LoggedIn';
import { Home } from '../pages/Home';
import { Facebook } from '../pages/Facebook';
import { Microsoft } from '../pages/Microsoft';
import { Google } from '../pages/Google';

export const Acess = () => {
  return (
    <Nav>
      <Link to={'./Facebook'} >
        <div>
          <img src={imageFacebook} alt="Imagem do Facebook" />
          <h3>Iniciar sessão com o Facebook</h3>
        </div>
      </Link>
      <Link to={'/Google'}>
        <div>
          <img src={imageGoogle} alt="Imagem do Google" />
          <h3>Iniciar sessão com o Google</h3>
        </div>
      </Link>
      <Link to={'/Microsoft'}>
        <div>
          <img src={imageMicrosoft} alt="Imagem da Microsoft" />
          <h3>Iniciar sessão com a Microsoft</h3>
        </div>
      </Link>
    </Nav>
  );
}

export const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LoggedIn" element={<LoggedIn/>} />
      <Route path="/Facebook" element={<R.AuthFacebook><Facebook /></R.AuthFacebook>} />
      <Route path="/Google" element={<R.AuthGoogle><Google /></R.AuthGoogle>} />
      <Route path="/Microsoft" element={<R.AuthMicrosoft><Microsoft /></R.AuthMicrosoft>} />
    </Routes>
  );
}