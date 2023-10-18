import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);
const Theme = ({ children }) => {
    const storedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(storedTheme || "light");
    const [mode, setMode] = useState(false);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const values = {
        handleTheme,
        mode,
        setMode,
    };

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    );
};

export default Theme;
