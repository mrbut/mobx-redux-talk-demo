import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTheme, toggleModal } from './actions';

// App Contexts
import { ThemeContext } from './context/ThemeContext';

// App Components
import GlobalStyles from './styles/GlobalStyles';
import GlobalNotification from './components/GlobalNotification';
import Header from './components/Header';
import reactLogo from './assets/images/reactLogo.png';
import Calculations from './containers/Calculations';
import Footer from './components/Footer';
import Modal from './components/Modal';

const handleDeleteHistory = historyID => {
  console.log(`${historyID} was deleted`);
};

const mapStateToProps = state => ({
  theme: state.userSession.theme,
  showModal: state.userSession.showModal
});

const mapDispatchToProps = dispatch => ({
  toggleTheme: theme => dispatch(setTheme(theme)),
  toggleModal: isShowing => dispatch(toggleModal(isShowing))
});

const App = props => {
  const [history, setHistory] = useState([{ hID: 1909, result: 400 }, { hID: 1209, result: 100 }]);
  const [authenticated, setAuthenticated] = useState(false);
  const { theme, toggleTheme, toggleModal, showModal } = props;
  return (
    <ThemeContext.Provider value={theme}>
      <React.Fragment>
        <GlobalStyles theme={theme.theme} />
        <GlobalNotification icon={reactLogo}>Redux Example</GlobalNotification>
        <Header authenticated={authenticated} handleShowModal={() => toggleModal(showModal)} />
        <Calculations calculations={history} handleDeleteHistory={handleDeleteHistory} />
        <Footer handleThemeChange={() => toggleTheme(theme.theme)} />
        <Modal handleShowModal={() => toggleModal(showModal)} showModal={showModal} />
      </React.Fragment>
    </ThemeContext.Provider>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
