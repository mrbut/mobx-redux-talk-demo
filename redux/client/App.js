import React, { useState } from 'react';

// App Contexts
import { ThemeContext } from './context/ThemeContext';

// App Components
import GlobalStyles from './styles/GlobalStyles';
import GlobalNotification from './components/GlobalNotification';
import Header from './components/Header';
import reactLogo from './assets/images/reactLogo.png';
import Calculations from './components/Calculations';
import Footer from './components/Footer';
import Modal from './components/Modal';

const handleDeleteHistory = historyID => {
  console.log(`${historyID} was deleted`);
};

const App = () => {
  const [theme, setTheme] = useState({ theme: 'light' });
  const [history, setHistory] = useState([
    { hID: 1909, value: [16, '+', 40, 'x', '2'] },
    { hID: 2109, value: [16, '+', 40, 'x', '2'] }
  ]);
  const [authenticated, setAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeContext.Provider value={theme}>
      <React.Fragment>
        <GlobalStyles theme={theme.theme} />
        <GlobalNotification icon={reactLogo}>Redux Example</GlobalNotification>
        <Header authenticated={authenticated} handleShowModal={() => setShowModal(!showModal)} />
        <Calculations calculations={history} handleDeleteHistory={handleDeleteHistory} />
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
