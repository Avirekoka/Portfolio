export interface INavLink {
    id: number;
    title: string;
    link: string;
    color: string;
}

export interface IProjects {
    id: number;
    projectName: string;
    githubLink: string;
    deployedLink: string;
}

export interface IContactUs {
    fullName: string;
    email: string;
    message: string;
}