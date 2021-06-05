import React from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme/theme';
import { GlobalStyles } from './Theme/global';
import { useDarkMode } from './Theme/useDarkMode';
import Toggle from './Theme/Toggle';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import navbar from './Navbar/navbar';

const Div = styled.div`
  background-color: ${({ theme }) => theme.navbar};
  display: flex;
`;

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <Div className="topbar">
            <Route path="/" component={navbar} />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </Div>
          
          {/* <Route exact path="/" component={} /> */}

        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;