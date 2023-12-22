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
];

export const homepageProjects: Array<Project> = [
    {
        id: 1,
        title: "BrumAI Website",
        details: "BrumAI is a dynamic community located in Birmingham that is dedicated to fostering innovation, collaboration, and learning in the field of Artificial Intelligence and was the client for whom this project was developed. BrumAI's problem was that their website at the time did not demonstrate who their group was and what they had to offer. As such, they requested that a new website be made that better displayed everything that BrumAI is; which is where myself and my team of 5 other School of Code bootcampers come in. With a timeline of 4-weeks, myself and my team developed a new website for BrumAI using Next.js 14 alongside Tailwind.CSS for the styling to the satisfaction of the client. The website supports a Postgres database hosted with SupaBase that stores all event information for BrumAI which is called by the website before being dynamically displayed. The website is designed to be responsive allowing it to be viewed easily on any device. This project was a great experience of building a modern website and posed a number of challenges that were fun to tackle!",
        techStack: "JavaScript, JSZ, React, Next.js, PostgreSQL, Tailwind.CSS, MUI, AntD",
        url: "https://brum-ai-test.netlify.app/",
        photo: "/images/brumai_website.png"
    },
    {
        id: 2,
        title: "Memory Echo",
        details: "A problem that Bootcampers in the School of Code face is that the intense pace of the course makes it difficult to revise and remember all of the informaion taught. Multiple topics are taught each day and it is inevitable that something will fall through the cracks and be forgotten. To address this problem, myself and my team developed Memory Echo: The Spaced Repetition App! Memory Echo allows users to input a topic/method name and description which will be stored in a PostgreSQL database. Memory Echo will then used the space repetition method to remind users of topics they need to study over an increasing gap in time, much like how an echo spaces out over time. The Frontend of the app was made using JavaScript, HTML and CSS while the backend uses Node.js, REST APIs and PostgreSQL. NOTE: The database takes a moment to spin up on the website, please refresh after a minute or two.",
        techStack: "JavaScript, HTML, CSS, PostgreSQL, Node.js, REST API",
        url: "https://memoryecho.vercel.app/",
        photo: "/images/memory_echo.png"
    },
];
