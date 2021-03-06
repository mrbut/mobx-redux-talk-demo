import React, { useState } from 'react';

// App Contexts
import { ThemeContext } from './context/ThemeContext';

// App Components
import GlobalStyles from './styles/GlobalStyles';
import GlobalNotification from './components/GlobalNotification';
import Header from './components/Header';
import mobXLogo from './assets/images/mobxLogo.png';
import Calculations from './components/Calculations';
import Footer from './components/Footer';
import Modal from './components/Modal';

const handleDeleteHistory = historyID => {
  console.log(`${historyID} was deleted`);
};

// this.state = {theme: 'light', history: [{ hID: 1909, result: 20 }, { hID: 2109, result: 1000 }]};
const App = () => {
  const [theme, setTheme] = useState({ theme: 'light' }); // [state, handleToChangeState]
  const [history, setHistory] = useState([{ hID: 1909, result: 20 }, { hID: 2109, result: 1000 }]);
  const [currentCalculation, setCurrentCalculation] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeContext.Provider value={theme}>
      <React.Fragment>
        <GlobalStyles theme={theme.theme} />
        <GlobalNotification icon={mobXLogo}>MobX Example</GlobalNotification>
        <Header authenticated={authenticated} handleShowModal={() => setShowModal(!showModal)} />
        <Calculations
          output={0}
          currentCalcuation={currentCalculation}
          calculations={history}
          handleDeleteHistory={handleDeleteHistory}
        />
        <Footer
          handleThemeChange={() =>
            theme.theme === 'light' ? setTheme({ theme: 'dark' }) : setTheme({ theme: 'light' })
          }
        />
        <Modal handleShowModal={() => setShowModal(!showModal)} showModal={showModal} />
      </React.Fragment>
    </ThemeContext.Provider>
  );
};

export default App;
