import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GloabalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GloabalStyle />
  </>
);
export default App;
