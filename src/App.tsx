import './App.scss';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Routes from './routes/allRoutes';
import theme from './theme/theme';
import MainHeader from './components/header/mainHeader'
import {LOGO} from './constants'
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Redux/store';

function App() {
  const { darkMode } = useSelector((state: RootState) => state.darkModeReducer);

  const enableDarkMode = {
    background: 'inherit',
    color: 'black'
  }

  const disableDarkMode = {
    background: 'black',
    color: 'white'
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={darkMode ? disableDarkMode : enableDarkMode}>
      <CssBaseline />
      <Box px={3} py={2}>
      <img src={LOGO} />
      </Box>
      <MainHeader/>
      <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
