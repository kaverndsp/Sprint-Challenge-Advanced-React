import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const NavBar = () => {

    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };
    
    
    const [darkMode, setDarkMode] = useDarkMode(false);

    return (
        <div>
            <button className="button" data-testid="darkmodebutton" onClick={toggleMode}>
                Dark Mode
                </button>
        </div>
    );
}

export default NavBar; 