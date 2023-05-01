import { Theme } from '../types/theme';
import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext({
  theme: Theme.Light,
  setTheme: (theme: Theme) => {
    console.warn('unassigned context');
  }
});

export default function useTheme() {
  const [theme, setTheme] = useState(Theme.Light);

  const themeContext = useContext(ThemeContext);
  themeContext.theme = theme;
  themeContext.setTheme = (theme: Theme): void => {
    if (Object.values(Theme).includes(theme)) {
      setTheme(theme);
    }
  };

  return themeContext;
}
