import { Fragment } from 'react';
import { Container } from "./styles";
import { Footer } from './components/Footer';
import { Header } from '../src/components/Header'; // C = Components
import { Routs } from './routes';

export function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <Routs />
      </Container>
      <Footer />
    </Fragment >
  );
}