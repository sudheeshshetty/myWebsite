import React from 'react';
import logo from './logo.svg';
import Header from './components/header';
import Banner from './components/banner';
import Summary from './components/summary';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Overview from './components/overview';
import Work from './components/work';
import Education from './components/education';
import Skills from './components/skills';
import AdditionalInformation from './components/additionalInformation';
import Footer from './components/footer';

// Define your custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'HK Grotesk, sans-serif',
    h5: {
      letterSpacing: '0.1em',
    },
    h6: {
      letterSpacing: '0.1em',
    },
    body1: {
      letterSpacing: '0.05em',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Banner />
        <div id="summary">
          <Summary />
        </div>
        <div id="overview">
          <Overview />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="additional-information">
          <AdditionalInformation />
        </div>
        <div style={{ marginBottom: '40px' }}>

        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
