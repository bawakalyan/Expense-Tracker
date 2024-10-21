import React from "react";
import DarkModeToggle from "../components/DarkModeToggle";

const About = () => (
    <>
        <div className="min-h-screen bg-gradient-to-r dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col justify-center">
            <DarkModeToggle />
            <div className="grid grid-cols-2 mb-9 gap-0">
                <div className="flex justify-center">
                    <img src="pikaso_edit.png" alt="Expense Tracker Image 1" className="w-90 h-98 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out" />
                </div>
                <div className="flex flex-col justify-center w-full h-full">
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mb-4 transform transition-transform duration-500 hover:scale-105">
                        <h1 className="text-center text-5xl font-bold gap-0 mb-8 text-purple-500">
                            About Page
                        </h1>
                        <p className="p-1 text-lg text-gray-600 dark:text-gray-300">
                            A simple expense tracker web application built using React allowing users to add, delete, and track ExpenseList added by user or inputted by user.
                            <br />
                            The app was developed using the React framework, which is based on JavaScript, allowing users JavaScript DOM manipulation functionality and further improvements over vanilla JavaScript.
                            <br />
                            For the styling part, Tailwind CSS was used, which is a superset of its native version.
                            <br/>
                            The chart is prepared using the react-chartjs-2 module provided through node package modules upon running the command npm i react-chartjs-2.
                            <br />
                            For routing purposes, we are using pages-based routing, though it's not useful as of now, but it's the same as the native method of using routing in HTML, CSS, and JS based websites.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 transform transition-transform duration-500 hover:scale-105">
                        <h1 className="text-center text-5xl font-bold gap-0 mb-8 text-purple-500">
                            Contact Details:
                        </h1>
                        <p className="p-1 text-lg text-gray-600 dark:text-gray-300">
                            Email: <a href="http://localhost:5173/m" className="text-purple-500 hover:underline">expensetrack@gmail.com</a>
                            <br />
                            Phone:7807796294<br />
                            Phone:9418865791<br />
                

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default About;