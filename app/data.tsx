export interface Project {
    id: number;
    title: string;
    details: string;
    techStack: string;
    url: string | undefined;
    photo: string;

}

export const projectDetails: Array<Project> = [
    {
        id: 1,
        title: "100 Days of Code Blog",
        details: "I decided to make the 100 Days of Code Blog as a means to practice creating an API using MVC architecture that would take data from an external database. The database was a PostgreSQL database hosted on ElephantSQL and the front-end used HTML, CSS and JavaScript. The API was also set up as a REST API and as such can be called from, added and updated to as well as deleted from which is controlled through a basic log in system that confirms credentials against the database.",
        techStack: "JavaScript, HTML, CSS, Node.js, PostgreSQL, Rest API",
        url: "https://100daysofcodeblog.netlify.app/",
        photo: "/images/100_days_of_code_blog.png"
    },
    {
        id: 2,
        title: "Weather App",
        details: "I created this weather app after creating a more basic version as part of a School of Code weekly Hackathon and wasn't able to implement all of the ideas that I had thought of. The app uses multiple API requests to open-meteo that either generate the users coordinates based on the inputted location or requests meteorological data using the previously generated user coordinates. This app was also great practice for DOM manipulation based on user input.",
        techStack: "JavaScript, HTML, CSS",
        url: "https://dayhikari.github.io/WeatherApp/",
        photo: "/images/weather_app.png"
    },
    {
        id: 3,
        title: "Rating Component",
        details: "This project was a pair project using Frontend Mentor to practice creating frontend projects using HTML, CSS and JavaScript. The goal of the project was to create an interactive rating component based on a pre-defined design. The reason for completing this project was to develop my frontend skills, in particular the styling aspects of CSS, after realising that this was a weak point for me.",
        techStack: "JavaScript, HTML, CSS",
        url: "https://dayhikari.github.io/Rating_Component/",
        photo: "/images/rating_component.png"
    },
    {
        id: 4,
        title: "Calculator",
        details: "My first project! I started this calculator shortly after starting at the School of Code as a fun way to practice the topics I was learning on the course. It was particularly exciting for me as it was my first attempt at DOM manipulation and made me truly feel like I had started down the path to be a developer. Although the code itself could do with quite a bit of refactoring, I do not intend to do so as I will use it as a reminder as to how far I have developed",
        techStack: "JavaScript, HTML, CSS",
        url: "https://dayhikari.github.io/Calculator/",
        photo: "/images/calculator.png"
    },
]