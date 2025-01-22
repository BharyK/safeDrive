import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  createTheme,
  ThemeProvider,
  Theme,
} from '@mui/material/styles';
import App from '../../App';

interface ThemeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

interface ThemeProviderProps {
  children: ReactNode;
}

export const DarkModeToggle: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

