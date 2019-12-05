import React from 'react';
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };

  const ThemeLightContext = React.createContext(themes.light);
  const ThemeDarkContext = React.createContext(themes.dark);
  export {
      ThemeLightContext,
       ThemeDarkContext
};