export interface INavLink {
    id: number;
    title: string;
    link: string;
    color: string;
};

export interface IProjects {
    id: number;
    projectName: string;
    githubLink: string;
    deployedLink: string;
    description: string;
};

export interface IContactUs {
    fullName: string;
    email: string;
    message: string;
};

export interface IExperience {
    id: number;
    companyName: string;
    JoinedOn: String;
    EndOn: string;
    description: string;
    companyLogo: string;
    totalExperience: {
        years: number;
        months: number;
    };
};

export interface IContactDetails {
    id: number;
    icon: string;
    details: string[];
}