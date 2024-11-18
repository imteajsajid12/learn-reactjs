import React from "react";
export const ThemesContext = React.createContext({
  themeMode: "light",
  toggleTheme: () => {},
});

export const ThemesProvider = ThemesContext.Provider;

export  default function  UseThemes(){
 return React.useContext(ThemesContext);

}





