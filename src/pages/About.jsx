import React from "react";
import DarkModeToggle from "../components/DarkModeToggle";

const About = () => (
    <>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col justify-center">
            <DarkModeToggle />
            <h1 className="text-center p-10">
                About Page
            </h1>
            <p className="text-center p-10">
                A simple expense tracker web application build using react allowing users to add ,delete and track ExpenseList added by user or inputted by user.

                The app was developed using react framework that is a framework based on javascript allowing users
                javascript dom manipulation fuctionality and further improvements over the vanilla javascript.

                For the styling part Tailwind Css was used i.e another tools that is superset of its native version.

                The chart is prepared using the react-chartjs-2 module provided through node package modules upon running the command npm i react-chartjs-2.

                For Routing puprose we are using pages based routing though its not useful as of now but its the same as the native method of using the routing in Html ,Css and JS based Websites.
            </p>
        </div>
    </>
)

export default About;