import React from "react";
import { useState } from "react";

const DarkModeToggle = () =>{
    const [darkMode , setDarkmode] = useState(false)

    const toggleDarkMode = () =>{
        setDarkmode(!darkMode);
        document.documentElement.classList.toggle('dark')
    }

    return (
        <button onClick={toggleDarkMode} className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 p-2 rounded-md">
            {darkMode? 'Switch to Light Mode': 'Switch to Dark mode'}
        </button>
    )
}

export default DarkModeToggle