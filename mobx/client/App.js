import React from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import DevTools from 'mobx-react-devtools';

// App Contexts
import { ThemeContext } from './context/ThemeContext';
import CalculatorContext from './context/CalculatorContext';

// App Components
import { inputTypes } from './utils/calculator';
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
  const userSessionState = useObservable({
    theme: { theme: 'light' },
    setTheme() {
      userSessionState.theme =
        userSessionState.theme.theme === 'light' ? { theme: 'dark' } : { theme: 'light' };
    },
    history: [],
    authenticated: false,
    showModal: false,
    setShowModal() {
      userSessionState.showModal = !userSessionState.showModal;
    }
  });

  const calculator = useObservable({
    output: 0,
    curInput: { operator: '', operand1: null, operand2: null },
    previousOutput: null,
    clear() {
      calculator.output = 0;
      calculator.curInput = { operator: '', operand: null };
      calculator.previousOutput = null;
    },
    inputNum(num) {
      if (calculator.previousOutput) {
        calculator.output = num;
      } else {
        const result =
          calculator.output === 0
            ? num
            : `${calculator.output !== 0 ? calculator.output : ''}${num}`;
        calculator.output = Number(result);
      }
      if (!calculator.curInput.operand1) {
        calculator.curInput.operand1 = calculator.output;
      }
    },
    negate() {
      calculator.output *= -1;
    },
    percent() {
      calculator.output /= 100;
    },
    updateCalculation({ operator, operand }) {
      const { curInput } = calculator;
      if (operator) {
        if (curInput.operator && curInput.operand1 && curInput.operand2) {
          console.log('kfldsafjlskdfjl');
          // console.log(inputTypes[operator].operator(1, 1));
          calculator.output = inputTypes[operator].operator(curInput.operand1, curInput.operand2);
          calculator.previousOutput = null;
          curInput.operand1 = calculator.output;
          curInput.operand2 = null;
        }
        curInput.operator = operator;
        calculator.previousOutput = calculator.output;
      } else if (operand && curInput.operator) {
        console.log({ operator: curInput.operator, operand: curInput.operand });
        if (curInput.operand1) {
          curInput.operand2 = operand;
        } else {
          curInput.operand1 = operand;
        }
        calculator.previousOutput = null;
      }
      console.log({
        operator: curInput.operator,
        operand1: curInput.operand1,
        operand2: curInput.operand2
      });
      console.log({
        output: calculator.output,
        operand1: curInput.operand1,
        operand2: curInput.operand2
      });
    },
    evaluate() {
      const { curInput } = calculator;
      if (curInput.operator && curInput.operand1 && curInput.operand2) {
        calculator.output = inputTypes[curInput.operator].operator(
          curInput.operand1,
          curInput.operand2
        );
      }
      userSessionState.history.push({ hID: 1909, result: calculator.output });
    }
  });

  const { theme, history, setTheme, authenticated, showModal, setShowModal } = userSessionState;
  const { output, inputNum, clear, negate, percent, updateCalculation, evaluate } = calculator;
  return (
    <CalculatorContext.Provider
      value={{
        clear,
        evaluate,
        inputNum,
        negate,
        percent,
        updateCalculation
      }}
    >
      <ThemeContext.Provider value={theme}>
        <div>
          <DevTools />
          <GlobalStyles theme={theme.theme} />
          <GlobalNotification icon={mobXLogo}>MobX Example</GlobalNotification>
          <Header authenticated={authenticated} handleShowModal={() => setShowModal(!showModal)} />
          <Calculations
            output={output}
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
