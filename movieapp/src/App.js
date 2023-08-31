import { Fragment } from 'react';
import './App.css';
import { AppProvider } from './AppContext';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  return (
    <AppProvider>
      <MainContainer></MainContainer>
    </AppProvider>
  );
}

export default App;
