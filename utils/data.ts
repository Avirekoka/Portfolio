import { IContactDetails, IExperience, INavLink, IProjects } from "@/interface";
import { calculateYearAndMonth } from "./helper-functions";

export const navLinks: INavLink[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        color: "bg-red-500"
    },
    {
        id: 2,
        title: "About",
        link: "/about",
        color: "bg-violet-900"
    },
    {
        id: 3,
        title: "Contact",
        link: "/contact",
        color: "bg-lime-500"
    }
];

export const projects: IProjects[] = [
    {
        id: 1,
        projectName: "Avi-mart",
        githubLink: "https://github.com/Avirekoka/Avi-mart",
        deployedLink: "https://github.com/Avirekoka/Avi-mart",
        description: "Avinash client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms",
    },
    {
        id: 2,
        projectName: "File-Sharing",
        githubLink: "https://github.com/Avirekoka/File-Sharing",
        deployedLink: "https://github.com/Avirekoka/File-Sharing",
        description: "Avinash client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms",
    },
    {
        id: 3,
        projectName: "Portfolio",
        githubLink: "https://github.com/Avirekoka/portfolio",
        deployedLink: "https://github.com/Avirekoka/portfolio",
        description: "It is my personal portfolio, building to showcase my skills, projects and about me. This project build using Nextjs, tailwind css for the design. There is no backend as of now",
    },
    {
        id: 4,
        projectName: "User Management Dashboard",
        githubLink: "https://github.com/Avirekoka/user-management-dashboard",
        deployedLink: "https://github.com/Avirekoka/user-management-dashboard",
        description: "This project is purly frontend project. This was my assignment given by one of the company during interview process. There is the user management dashboard, in which we can perform CRUD operations. This project build using React for the frontend and there is already available API's used for the backend",
    },
    {
        id: 5,
        projectName: "bada-player.com",
        githubLink: "https://github.com/Avirekoka/bada-player-test.com",
        deployedLink: "https://github.com/Avirekoka/bada-player-test.com",
        description: "It is my personal ongoing project. Building using latest technologies like React and it's tranding framework Nextjs. Integrating Firebase for the authentication and Nodejs along with Mongo as database for the backend",
    },
    {
        id: 6,
        projectName: "Truth Table Generator",
        githubLink: "https://github.com/Avinash123-456/ttg_Django",
        deployedLink: "https://github.com",
        description: "Truth Table Generator is a simple project that generates truth table based on the user inputs. User can provide number of variables and condition to generate truth table. Truth Table Generator project build using major technology Python's backend framwork Django. Technology - Python, Django, html, css, javascript",
    }
];

export const experience: IExperience[] = [
    {
        id: 1,
        companyName: "OZiva Pvt. Ltd.",
        JoinedOn: "17 Oct 2022",
        EndOn: "Present",
        description: "Avinash client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms",
        companyLogo: "oziva.png",
        totalExperience: calculateYearAndMonth(new Date("17 Oct 2022"), new Date())
    },
    {
        id: 2,
        companyName: "Blue Bricks Pvt. Ltd.",
        JoinedOn: "5 July 2022",
        EndOn: "13 October 2022",
        description: "Avinash client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms",
        companyLogo: "blue_bricks.png",
        totalExperience: calculateYearAndMonth(new Date("5 July 2022"), new Date("13 October 2022"))
    },
    {
        id: 3,
        companyName: "Cere Labs Pvt. Ltd",
        JoinedOn: "22 June 2021",
        EndOn: "27 June 2022",
        description: "Avinash client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms. Client and server successfully in 540 ms",
        companyLogo: "cere_labs.png",
        totalExperience: calculateYearAndMonth(new Date("22 June 2021"), new Date("27 June 2022"))
    }
];

export const contactDetails: IContactDetails[] = [
    {
        id: 1,
        icon: "phone-call.png",
        details: ["+91-9892583723"]
    },
    {
        id: 2,
        icon: "email.png",
        details: ["avi1999kokare@gmail.com", "avinash.kokare@fitcircle.in"]
    },
    {
        id: 3,
        icon: "placeholder.png",
        details: ["Omkar Krishna Park - 2, Vichumbe", "New Panvel, Raigad 410206"]
    },

]