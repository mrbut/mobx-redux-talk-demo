import React from 'react';
import { observer, useComputed, useObservable } from 'mobx-react-lite';
import DevTools from 'mobx-react-devtools';

// App Contexts
import { ThemeContext } from './context/ThemeContext';
import CalculatorContext from './context/CalculatorContext';

// App Components
import { inputTypes, matchOperator } from './utils/calculator';
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

const App = observer(() => {
  const state = useObservable({
    theme: { theme: 'light' },
    setTheme() {
      state.theme = state.theme.theme === 'light' ? { theme: 'dark' } : { theme: 'light' };
    },
    history: [
      { hID: 1909, value: [16, '+', 40, 'x', '2'] },
      { hID: 2109, value: [16, '+', 40, 'x', '2'] }
    ],
    setHistory() {},
    currentCalculation: [],
    setCurrentCalculation() {},
    authenticated: false,
    setAuthenticated() {},
    showModal: false,
    setShowModal() {
      state.showModal = !state.showModal;
    }
  });

  const calculator = useObservable({
    output: '0',
    history: []
  });

  const lastInput = useComputed(() => calculator.history[calculator.history.length - 1]);
  const lastInputIsOperator = useComputed(() => typeof lastInput === 'string');

  const inputNum = num => {
    calculator.output =
      calculator.output === '0'
        ? `${num}`
        : `${calculator.output !== '0' ? calculator.output : ''}${num}`;
  };

  const clearOutput = () => {
    if (calculator.history.length <= 2) {
      calculator.output = 0;
    } else if (lastInputIsOperator && lastInput !== '%') {
      // [5, '+', 5, '+']
      calculator.history.pop();
    } else if (lastInput === '%') {
      calculator.output *= 100;
      calculator.history.splice(-1);
    } else {
      // [5, '+', 5]
      const { operator } = this.matchOperator(
        calculator.history[calculator.history.length - 2],
        true
      );
      calculator.output = operator(calculator.lastInput);
      calculator.history.splice(-2);
    }
  };

  const negateOutput = () => {
    this.output *= -1;
  };

  const {
    theme,
    setTheme,
    history,
    setHistory,
    currentCalculation,
    setCurrentCalculation,
    authenticated,
    setAuthenticated,
    showModal,
    setShowModal
  } = state;

  return (
    <CalculatorContext.Provider
      value={{
        inputNum,
        clearOutput
      }}
    >
      <ThemeContext.Provider value={theme}>
        <div>
          <DevTools />
          <GlobalStyles theme={theme.theme} />
          <GlobalNotification icon={mobXLogo}>MobX Example</GlobalNotification>
          <Header authenticated={authenticated} handleShowModal={() => setShowModal(!showModal)} />
          <Calculations
            output={calculator.output}
            outputHistory={calculator.history}
            history={history}
            handleDeleteHistory={handleDeleteHistory}
          />
          <Footer
            handleThemeChange={() =>
              theme.theme === 'light' ? setTheme({ theme: 'dark' }) : setTheme({ theme: 'light' })
            }
          />
          <Modal handleShowModal={() => setShowModal(!showModal)} showModal={showModal} />
        </div>
      </ThemeContext.Provider>
    </CalculatorContext.Provider>
  );
});

export default App;
