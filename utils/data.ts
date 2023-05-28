import { IExperience, INavLink, IProjects } from "@/interface";
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
    },
    {
        id: 4,
        title: "Social",
        link: "/social",
        color: "bg-green-400"
    }
];

export const projects: IProjects[] = [
    {
        id: 1,
        projectName: "Avi-mart",
        githubLink: "https://github.com/Avirekoka/Avi-mart",
        deployedLink: "https://github.com/Avirekoka/Avi-mart"
    },
    {
        id: 2,
        projectName: "File-Sharing",
        githubLink: "https://github.com/Avirekoka/File-Sharing",
        deployedLink: "https://github.com/Avirekoka/File-Sharing"
    },
    {
        id: 3,
        projectName: "Portfolio",
        githubLink: "https://github.com/Avirekoka/portfolio",
        deployedLink: "https://github.com/Avirekoka/portfolio"
    },
    {
        id: 4,
        projectName: "user-management-dashboard",
        githubLink: "https://github.com/Avirekoka/user-management-dashboard",
        deployedLink: "https://github.com/Avirekoka/user-management-dashboard"
    },
    {
        id: 5,
        projectName: "bada-player.com",
        githubLink: "https://github.com/Avirekoka/bada-player-test.com",
        deployedLink: "https://github.com/Avirekoka/bada-player-test.com"
    },
    {
        id: 5,
        projectName: "ttg_Django",
        githubLink: "https://github.com/Avinash123-456/ttg_Django",
        deployedLink: "https://github.com"
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