import React, { createContext, useContext } from 'react';

// App Contexts
import { ThemeContext } from './context/ThemeContext';

// App Components
import GlobalStyles from './styles/GlobalStyles';
import GlobalNotification from './components/GlobalNotification';
import Header from './components/Header';
import Switch from './components/Switch';
import reactLogo from './assets/images/reactLogo.png';
import Calculations from './components/Calculations';

const state = {
  theme: 'light',
  calculations: {
    history: [
      { hID: 1909, value: [16, '+', 40, 'x', '2'] },
      { hID: 2109, value: [16, '+', 40, 'x', '2'] }
    ]
  }
};

const handleDeleteHistory = historyID => {
  console.log(`${historyID} was deleted`);
};

const App = () => (
  <ThemeContext.Provider value={state}>
    <React.Fragment>
      <GlobalStyles theme={state.theme} />
      <GlobalNotification icon={reactLogo}>Redux Example</GlobalNotification>
      <Header />
      <Calculations
        calculations={state.calculations.history}
        handleDeleteHistory={handleDeleteHistory}
      />
    </React.Fragment>
  </ThemeContext.Provider>
);

export default App;
