import { useReducer , createContext } from "react";


export const ThemeContext =createContext ();

function themeReducer (theme, action) {
    switch (action.type) {
        case "navigate" : 
        return theme === "light" ? "dark" : "light";
        default :
         return theme;
    }
}

export function ThemeProvider({children}){
    const [theme ,dispatch] =useReducer (themeReducer ,"light");

    return (
        <ThemeContext.Provider value ={{theme ,dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}